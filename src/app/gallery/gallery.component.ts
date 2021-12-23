import { Component, NgModule, OnInit } from '@angular/core';
// import { Lightbox } from 'ngx-lightbox';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {


  // gallery:any =[
  //   {
  //     src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsJeHJk939rnwB3FX3KByST5WyKqGQNgOl1Q&usqp=CAU",
      
  //     thumb:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsJeHJk939rnwB3FX3KByST5WyKqGQNgOl1Q&usqp=CAU",

  //   },
  //   {
  //     src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoxAOC0SPPBSuTWqvfY2VORN0gjGuuzSkIlA&usqp=CAU",
      
  //     thumb:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoxAOC0SPPBSuTWqvfY2VORN0gjGuuzSkIlA&usqp=CAU",

  //   },
  //   {
  //     src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGrBydq1EkcmP-Qo2bOc4vm-4HOyo6UdEfDg&usqp=CAU",
      
  //     thumb:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGrBydq1EkcmP-Qo2bOc4vm-4HOyo6UdEfDg&usqp=CAU",

  //   },
  //   {
  //     src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAHY2rcTR2b_PUMfqriDBV5Wy04CyhvFZn3w&usqp=CAU",
      
  //     thumb:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAHY2rcTR2b_PUMfqriDBV5Wy04CyhvFZn3w&usqp=CAU",

  //   },
  //   {
  //     src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcrHCYlLbh9gJlS5FZjmqGDj8wWHOklCDoGw&usqp=CAU",
      
  //     thumb:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcrHCYlLbh9gJlS5FZjmqGDj8wWHOklCDoGw&usqp=CAU",

  //   },
  //   {
  //     src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXdkZJlYAVjmXcbwpJE1y9bjFaENFwI-PcIg&usqp=CAU",
      
  //     thumb:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXdkZJlYAVjmXcbwpJE1y9bjFaENFwI-PcIg&usqp=CAU",

  //   },
  //   {
  //     src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3TAkHOPd__HcKAmwo6XlXkbuoM19O65e-qw&usqp=CAU",
      
  //     thumb:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3TAkHOPd__HcKAmwo6XlXkbuoM19O65e-qw&usqp=CAU",

  //   },
  //   {
  //     src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2Bt1w37p_HUYsq_muEo970HQMiFhATFUq7Q&usqp=CAU",
      
  //     thumb:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2Bt1w37p_HUYsq_muEo970HQMiFhATFUq7Q&usqp=CAU",

  //   },
  //   {
  //     src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFcCBNFnJO6nm48YT7I5zAIkG4lO-SMK8Vog&usqp=CAU",
      
  //     thumb:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFcCBNFnJO6nm48YT7I5zAIkG4lO-SMK8Vog&usqp=CAU",

  //   },
  //   {
  //     src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN8CqstvU25xcgn8pPicgJUtc4QDc7UXsaVw&usqp=CAU",
      
  //     thumb:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN8CqstvU25xcgn8pPicgJUtc4QDc7UXsaVw&usqp=CAU",

  //   },
  //   {
  //     src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKpfK32P-79RsxAxpmSQgk0tulxS4noCD7wA&usqp=CAU",
      
  //     thumb:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKpfK32P-79RsxAxpmSQgk0tulxS4noCD7wA&usqp=CAU",

  //   },
  //   {
  //     src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQahJckPKLjlQa1RvwXqHoKyxDGc7m_ZiIxHQ&usqp=CAU",
      
  //     thumb:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQahJckPKLjlQa1RvwXqHoKyxDGc7m_ZiIxHQ&usqp=CAU",

  //   },
  //   {
  //     src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYWi3AZRS7_UMVJa1R0n_EEK0-1Yb0266gaQ&usqp=CAU",
      
  //     thumb:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYWi3AZRS7_UMVJa1R0n_EEK0-1Yb0266gaQ&usqp=CAU",

  //   },
  //   {
  //     src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlyTgg7eT85HIJiNzvz_q3PVnlAEpsFcx5Gw&usqp=CAU",
      
  //     thumb:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlyTgg7eT85HIJiNzvz_q3PVnlAEpsFcx5Gw&usqp=CAU",

  //   },
  //   {
  //     src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScHtzXJ5K0dtPHdMLV-FXQssC4sAMrNsD_Aw&usqp=CAU",
      
  //     thumb:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScHtzXJ5K0dtPHdMLV-FXQssC4sAMrNsD_Aw&usqp=CAU",

  //   },
  //   {
  //     src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ04hwsjYiK-4fCsw-RafaFqNW0-nomr3FiaA&usqp=CAU",
      
  //     thumb:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ04hwsjYiK-4fCsw-RafaFqNW0-nomr3FiaA&usqp=CAU",

  //   }
  //   // {
  //   //   src:"",
      
  //   //   thumb:"",

  //   // },
  //   // {
  //   //   src:"",
      
  //   //   thumb:"",

  //   // },
  //   // {
  //   //   src:"",
      
  //   //   thumb:"",

  //   // },


  // ]

 
  constructor() { }

  ngOnInit(): void {
  }

  // open(index: number): void {
  //   console.log("===>", index)
  //   this._lightbox.open(this.gallery, index);    // open lightbox
    
  // }

  // close(): void {
  //   this._lightbox.close();                      // close lightbox 
  // }

}
