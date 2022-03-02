module.exports = (chai, expect) => {
  describe("Classroom Routes", function () {
    const URL = "http://localhost:5000/classrooms";
    describe("/GET", () => {
      it("should return all classrooms", (done) => {
        chai
          .request(URL)
          .get("/")
          .end((err, res) => {
            expect(res).to.have.status(200);
            expect(res).to.be.a("object");
            done();
          });
      });

      it("should return a single classroom", (done) => {
        const id = 1;
        chai
          .request(URL)
          .get("/" + id)
          .end((err, res) => {
            expect(res).to.have.status(200);
            expect(res).to.be.a("object");
            done();
          });
      });

      it("should return a classroom with its users", (done) => {
        const classroom_name = "";
        chai
          .request(URL)
          .get("/" + classroom_name + "users")
          .end((err, res) => {
            expect(res).to.have.status(200);
            expect(res).to.be.a("object");
            done();
          });
      });
    });

    // describe("/POST", () => {
    //   it("should create a classroom in the database", (done) => {
    //     expect(res).to.have.status(200);
    //     expect(res).to.be.a("object");
    //     done();
    //   });
    // });

    // describe("/PUT", () => {
    //   it("should update a record in the database", (done) => {});
    // });
    // describe("/DELETE", () => {
    //   it("should delete a record in the database", (done) => {});
    // });
  });
};
