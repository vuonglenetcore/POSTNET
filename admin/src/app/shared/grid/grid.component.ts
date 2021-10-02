import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { DataBindingDirective } from '@progress/kendo-angular-grid';
import { process } from '@progress/kendo-data-query';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {
  @ViewChild(DataBindingDirective) dataBinding: DataBindingDirective;
@Input('giatri') value : any;

gridData: any = [{"id":"848e6002-8a92-447d-951b-1ffd5e695578","full_name":"Sig Jeannel","job_title":"Human Resources Assistant III","country":"US","is_online":true,"rating":3,"target":100,"budget":47601,"phone":"(936) 9429601","address":"138 Buhler Avenue","img_id":1,"gender":"M"},
{"id":"19d18d40-0e64-4837-9420-92130a0ed253","full_name":"Shelden Greyes","job_title":"Operator","country":"GB","is_online":true,"rating":5,"target":40,"budget":12253,"phone":"(343) 6656271","address":"2 Waxwing Point","img_id":2,"gender":"M"},
{"id":"bebdc6eb-9179-484a-917d-2e16a23bfdfe","full_name":"Megen Cody","job_title":"Operator","country":"BR","is_online":true,"rating":1,"target":66,"budget":96183,"phone":"(178) 2336256","address":"4082 Stephen Court","img_id":6,"gender":"F"},
];
private  images: any = { 

  "FR": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAArCAIAAABHOBkQAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTExIDc5LjE1ODMyNSwgMjAxNS8wOS8xMC0wMToxMDoyMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkJENDg5REJDMEM3MDExRTZBM0QzODREQzFFNDczOURFIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkJENDg5REJEMEM3MDExRTZBM0QzODREQzFFNDczOURFIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QkQ0ODlEQkEwQzcwMTFFNkEzRDM4NERDMUU0NzM5REUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QkQ0ODlEQkIwQzcwMTFFNkEzRDM4NERDMUU0NzM5REUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5eKs0eAAAAZUlEQVR42uzPMQ2AQBAAwXu610EwQxCAAnrE0GAAETR4IqGABg/XfTIrYJMp0W+R7vmOfZynIT14z+te1lJr+tBF4wEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADTVL8AAJaAJpU7NMCAAAAAASUVORK5CYIIxMDEz",

  "GB": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAAgCAYAAACinX6EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTExIDc5LjE1ODMyNSwgMjAxNS8wOS8xMC0wMToxMDoyMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjFERTU2NTJEMEQyRDExRTY5MUVCQTMxOUMzRTQ4OUQ4IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjFERTU2NTJFMEQyRDExRTY5MUVCQTMxOUMzRTQ4OUQ4Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MURFNTY1MkIwRDJEMTFFNjkxRUJBMzE5QzNFNDg5RDgiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MURFNTY1MkMwRDJEMTFFNjkxRUJBMzE5QzNFNDg5RDgiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4LW+oDAAAIsElEQVR42sxZ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",

  "US": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAAiCAIAAABgN0jYAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTExIDc5LjE1ODMyNSwgMjAxNS8wOS8xMC0wMToxMDoyMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkFBOEQ0MUQxMEQyRDExRTY4NzY1OUZEN0M0RTRGNDEzIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkFBOEQ0MUQyMEQyRDExRTY4NzY1OUZEN0M0RTRGNDEzIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QUE4RDQxQ0YwRDJEMTFFNjg3NjU5RkQ3QzRFNEY0MTMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QUE4RDQxRDAwRDJEMTFFNjg3NjU5RkQ3QzRFNEY0MTMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6Xh7i9AAAGGElEQVR42uxX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",
};

public mySelection: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }
  public onFilter(inputValue: string): void {
    this.gridData = process(this.gridData, {
        filter: {
            logic: "or",
            filters: [
                {
                    field: 'full_name',
                    operator: 'contains',
                    value: inputValue
                },
                {
                    field: 'job_title',
                    operator: 'contains',
                    value: inputValue
                },
                {
                    field: 'budget',
                    operator: 'contains',
                    value: inputValue
                },
                {
                    field: 'phone',
                    operator: 'contains',
                    value: inputValue
                },
                {
                    field: 'address',
                    operator: 'contains',
                    value: inputValue
                }
            ],
        }
    }).data;

    this.dataBinding.skip = 0;

   
}
private photoURL(dataItem: any): string {
  const code: string = dataItem.img_id + dataItem.gender;
  const image: any = this.images;

  return image[code];
}

private flagURL(dataItem: any): string {
  const code: string = dataItem.country;
  const image: any = this.images;

  return image[code];
}
}
