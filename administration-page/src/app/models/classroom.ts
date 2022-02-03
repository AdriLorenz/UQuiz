export class Classroom {
  private classroom_id: number;
  private classroom_name: string;

  constructor($classroom_id: number, $clsasroom_name: string) {
    this.classroom_id = $classroom_id;
    this.classroom_name = $clsasroom_name;
  }

  /**
   * Getter $classroom_id
   * @return {number}
   */
  public get $classroom_id(): number {
    return this.classroom_id;
  }

  /**
   * Getter $clsasroom_name
   * @return {string}
   */
  public get $clsasroom_name(): string {
    return this.classroom_name;
  }

  /**
   * Setter $classroom_id
   * @param {number} value
   */
  public set $classroom_id(value: number) {
    this.classroom_id = value;
  }

  /**
   * Setter $clsasroom_name
   * @param {string} value
   */
  public set $clsasroom_name(value: string) {
    this.classroom_name = value;
  }
}
