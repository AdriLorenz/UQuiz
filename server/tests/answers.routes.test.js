module.exports = (chai, expect) => {
  describe("Answers Routes", () => {
    const URL = "http://localhost:5000/answers";
    describe("/GET", () => {
      it("should return all answers", (done) => {
        chai
          .request(URL)
          .get("/data")
          .end((err, res) => {
            expect(res).to.have.status(200);
            expect(res).to.be.a("object");
            done();
          });
      });
      it("should return one answer by giving its id", (done) => {
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
      it("should return all answers of a question", (done) => {
        const id = 1;
        chai
          .request(URL)
          .get("/question/" + id)
          .end((err, res) => {
            expect(res).to.have.status(200);
            expect(res).to.be.a("object");
            done();
          });
      });
    });
    // describe("/POST", () => {
    //   it("should create an answers", (done) => {
    //     chai
    //       .request(URL)
    //       .post()
    //       .end((err, res) => {
    //         expect(res).to.have.status(200);
    //         done();
    //       });
    //   });
    // });
    // describe("/PUT", () => {
    //   it("should update an answer", (done) => {
    //     const id = 1;
    //     chai
    //       .request(URL)
    //       .put("/" + id)
    //       .end((err, res) => {
    //         expect(res).to.have.status(200);
    //         done();
    //       });
    //   });
    // });
    describe("/DELETE", () => {
      it("should return all answers", (done) => {
        const id = 1;
        chai
          .request(URL)
          .delete("/" + id)
          .end((err, res) => {
            expect(res).to.have.status(200);
            done();
          });
      });
    });
  });
};
