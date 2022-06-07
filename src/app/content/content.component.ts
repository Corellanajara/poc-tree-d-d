import { Component, OnInit } from '@angular/core';
interface treeItem {
  name : string;
  id : number;
  childrens : treeItem[];
}
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  rootTitle : string = "norma ...";
  tree  : treeItem[] = [];
  currentItem : treeItem = {
    id : 0,
    name : 'default',
    childrens : []
  };
  config = {
      hasAllCheckBox: true,
      hasFilter: false,
      hasCollapseExpand: false,
      decoupleChildFromParent: false,
      maxHeight: 500
  }
  constructor() { }
  setItem(item : treeItem){
    this.currentItem  = item;
  }
  initConfig(){
    this.currentItem = {
      id : 0,
      name : 'default',
      childrens : []
    };
    
    const stringTree : string = localStorage.getItem('tree') as string;
    const tree =  JSON.parse(stringTree);
    this.tree = tree;
    console.log('tre',this.tree);
    const stringConfig : string = localStorage.getItem('config') as string;
    const config =  JSON.parse(stringConfig);
    this.rootTitle = config.rootTitle;
  }
  ngOnInit(): void {    
    this.initConfig();
  }
  onSelectedChange(event : any){

  }
  onFilterChange(event : any){

  }
}
