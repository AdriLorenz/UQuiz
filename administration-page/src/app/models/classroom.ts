export class Classroom {
  public classroom_id: number;
  public classroom_name: string;

  constructor($classroom_id: number, $clsasroom_name: string) {
    this.classroom_id = $classroom_id;
    this.classroom_name = $clsasroom_name;
  }
}
