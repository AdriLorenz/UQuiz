module.exports = (chai, expect) => {
  describe("Question Routes", () => {
    const URL = "http://localhost:5000/questions";
    describe("/GET", () => {
      it("Should return all questions with their topics.", (done) => {
        chai
          .request(URL)
          .get("/data")
          .end((err, res) => {
            expect(res).to.have.status(200);
            expect(res).to.be.a("object");
            done();
          });
      });

      it("should return one question with its answers", (done) => {
        const question_id = 1;
        chai
          .request(URL)
          .get("/WithAnswers/" + question_id)
          .end((err, res) => {
            expect(res).to.have.status(200);
            expect(res).to.be.a("object");
            done();
          });
      });

      it("should return all question with their answers", (done) => {
        chai
          .request(URL)
          .get("/WithAnswers")
          .end((err, res) => {
            expect(res).to.have.status(200);
            expect(res).to.be.a("object");
            done();
          });
      });

      it("should return one question with its topic by giving question id", (done) => {
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
    });

    // describe("/POST", () => {
    //   it("should create a new question in the database", (done) => {});

    //   it("should create a new question with its answers in the database", (done) => {});
    // });

    // describe("PUT", () => {
    //   it("should edit a new question in the database", (done) => {});

    //   it("should edit a new question with its answers in the database", (done) => {});
    // });
    // describe("DELETE", () => {
    //   it("should delete a question from the database", (done) => {
    //     const id = 1;
    //     chai
    //       .request(URL)
    //       .delete("/" + id)
    //       .end((err, res) => {
    //         expect(res).to.have.status(200);
    //         done();
    //       });
    //   });
    // });
  });
};
