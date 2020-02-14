import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormBuilder } from '@angular/forms';
import { WallService } from 'src/app/services/wall/wall.service';

@Component({
  selector: 'app-new-board-post',
  templateUrl: './new-board-post.component.html',
  styleUrls: ['./new-board-post.component.scss']
})
export class NewBoardPostComponent implements OnInit {

  post: Post;
  form: FormGroup;

  constructor(
    private wall: WallService,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<NewBoardPostComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      title: '',
      author: '',
      contents: ''
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
    const name = this.author.value || 'Anonymous';
    const contents = this.contents.value;

    this.dialogRef.close({title, name, contents});
  }

  onClose() {
    this.dialogRef.close();
  }
}
