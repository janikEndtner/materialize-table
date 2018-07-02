import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaterializeTableComponent} from './materialize-table.component';
import {KeysPipe} from './pipes/keys.pipe';
import {SortByPipe} from './pipes/sort-by.pipe';
import {HighlightPipe} from './pipes/highlight.pipe';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from '../../app-routing.module';
import { FormatPipe } from './format.pipe';
import {InvitationToTenderModule} from "../invitation-to-tender/invitation-to-tender.module";

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        InvitationToTenderModule
    ],
    exports: [
        MaterializeTableComponent,
        KeysPipe,
        SortByPipe,
        HighlightPipe
    ],
    declarations: [
        MaterializeTableComponent,
        KeysPipe,
        SortByPipe,
        HighlightPipe,
        FormatPipe
    ]
})
export class MaterializeTableModule {
}
