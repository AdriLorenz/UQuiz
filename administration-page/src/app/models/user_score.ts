export class User_Score {
  public id: number;
  public user_id: number;
  public user_score: number;

  constructor($id: number, $user_id: number, $user_score: number) {
    this.id = $id;
    this.user_id = $user_id;
    this.user_score = $user_score;
  }
}
