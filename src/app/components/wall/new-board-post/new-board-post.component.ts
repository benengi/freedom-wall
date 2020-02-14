import { Component, OnInit, Inject, Input } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-new-board-post',
  templateUrl: './new-board-post.component.html',
  styleUrls: ['./new-board-post.component.scss']
})
export class NewBoardPostComponent implements OnInit {

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<NewBoardPostComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    }

  ngOnInit(): void {
    this.form = this.fb.group({
      title: this.data.title || '',
      author: this.data.author || '',
      contents: this.data.contents || ''
    });
  }

  get title() {
    return this.form.get('title');
  }

  get author() {
    return this.form.get('author');
  }

  get contents() {
    return this.form.get('contents');
  }

  onSubmit() {
    const title = this.title.value;
    const author = this.author.value;
    const contents = this.contents.value;

    this.dialogRef.close({title, author, contents, boardId: this.data.boardId});
  }

  onClose() {
    this.dialogRef.close();
  }
}
