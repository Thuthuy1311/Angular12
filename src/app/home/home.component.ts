import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    public traicay = ['Tao', 'Nho', 'Dua', 'Thom', 'Man', 'Oi']
    public traicay2 = [
        {
            ten: 'Táo',
            gia: 12,
            haGia: true
        },
        {
            ten: 'Xoài',
            gia: 20,
            haGia: false
        },
        {
            ten: 'Nhãn',
            gia: - 15,
            haGia: true
        },
    ]
    constructor() { }

    ngOnInit(): void {
    }

}
