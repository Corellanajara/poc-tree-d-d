import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css']
})
export class TreeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  title = 'marina platform';
  currentEvent: string = 'Arrastra pa hacer alguna wea';
  config = {
      showActionButtons: true,
      showAddButtons: true,
      showRenameButtons: true,
      showDeleteButtons: true,
      showRootActionButtons: true, // set false to hide root action buttons.
      enableExpandButtons: true,
      enableDragging: true,
      rootTitle: 'Norma 1',
      validationText: 'Enter valid norm',
      minCharacterLength: 5,
      setItemsAsLinks: false,
      setFontSize: 32,
      setIconSize: 16
  };
  myTree = [
    {
      name: 'sub tema norma 1',
      id: 1,
      options: {
          hidden: false,
          position: 1,
          href: 'https://github.com/Zicrael/ngx-tree-dnd'
        },
      childrens: [
        {
          name: 'wea 1',
          id: 2,
          childrens: []
        }
      ]
    },
    {
      name: 'sub tema norma 2',
      id: 3,
      childrens: [
        {
          name: 'wea 2',
          id: 4,
          childrens: []
        }
      ]
    }
  ];
  saveTree(){
    const tree = JSON.stringify(this.myTree);
    const config = JSON.stringify(this.config);
    localStorage.setItem('tree',tree);
    localStorage.setItem('config',config);
    alert("done!");
  }
  onDragStart(event : any) {
     this.currentEvent = ' on drag start';
     console.log(event);
  }
  onDrop(event : any) {
    this.currentEvent = 'on drop';
    console.log(event);
  }
  onAllowDrop(event : any) {
    this.currentEvent = 'on allow drop';
  }
  onDragEnter(event : any) {
    this.currentEvent = 'on drag enter';
  }
  onDragLeave(event : any) {
    this.currentEvent = 'on drag leave';
  }
  onAddItem(event : any) {
    this.currentEvent = 'on add item';
    console.log(event);
  }
  onStartRenameItem(event : any) {
    this.currentEvent = 'on start edit item';
  }
  onFinishRenameItem(event : any) {
    this.currentEvent = 'on finish edit item';
  }
  onStartDeleteItem(event : any) {
    console.log('start delete');
    this.currentEvent = 'on start delete item';
  }
  onFinishDeleteItem(event : any) {
    console.log('finish delete');
    this.currentEvent = 'on finish delete item';
  }
  onCancelDeleteItem(event : any) {
    console.log('cancel delete');
    this.currentEvent = 'on cancel delete item';
  }

}
