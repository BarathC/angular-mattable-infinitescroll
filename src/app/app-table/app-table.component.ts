import { Component, OnInit, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { UserDetails, FakeuserService } from '../fake-user.service';

@Component({
  selector: 'app-table',
  templateUrl: './app-table.component.html',
  styleUrls: ['./app-table.component.css']
})
export class AppTableComponent implements OnInit {
  @ViewChild('tableref',{static: false, read: ElementRef}) private oTableRef: ElementRef;
  public displayedColumns: string[] = ['name', 'email', 'phone'];
  private nScrollPosition = 0;
  public dataSource:Observable<UserDetails[]>;
  private dataStream: BehaviorSubject<UserDetails[]> = null;
  private arrUserDetails:UserDetails[] = [];

  constructor( private oFakeService:FakeuserService, private renderer: Renderer2) { }

  ngOnInit() {
    this.arrUserDetails = this.oFakeService.fnGetItems();
    this.fnFillRowData()

  }

  public onTableScroll(oEvent: any): void {
    const nTableViewHeight: number = oEvent.target.offsetHeight
    const nTableScrollHeight: number = oEvent.target.scrollHeight
    this.nScrollPosition = oEvent.target.scrollTop;

    const limit = nTableScrollHeight - nTableViewHeight - 100;
    if (this.nScrollPosition > limit) {
      // const bBottomReached: boolean = false

      // if (bBottomReached === true)
      //   return;

      // Load the next page
      this.oFakeService.fnPaginateUserDetails();
       this.fnFillRowData();
        this.fnScrollTo(this.nScrollPosition - (2 * 100))
    }
  }

    private fnFillRowData( ): void {

    if (null === this.dataStream || undefined === this.dataStream) {
      this.dataStream = new BehaviorSubject<UserDetails[]>(this.arrUserDetails);
      this.dataSource = this.dataStream.asObservable();
    }
    else {
      this.dataStream.next(this.arrUserDetails);
    }

  }

  public dropTable(oEvent){
    console.log(oEvent)
  }

    //Scroll to position
  private fnScrollTo(position: number): void {
    if(!!this.oTableRef)
      this.renderer.setProperty(this.oTableRef.nativeElement, 'scrollTop', position);
  }


}