module.exports = (chai, expect) => {
  describe("Theme Routes", () => {
    const URL = "http://localhost:5000/themes";
    describe("/GET", () => {
      //   it("should return all themes", (done) => {
      //     chai
      //       .request(URL)
      //       .get("/")
      //       .end((err, res) => {
      //         expect(res).to.have.status(200);
      //         expect(res).to.be.a("object");
      //         done();
      //       });
      //   });

      it("should return topics of a theme", (done) => {
        const theme_name = "";
        chai
          .request(URL)
          .get("/" + theme_name + "/topics")
          .end((err, res) => {
            expect(res).to.have.status(200);
            expect(res).to.be.a("object");
            done();
          });
      });

      it("should return a theme by its id", (done) => {
        const id = 1;
        chai
          .request(URL)
          .get("/" + id)
          .end((end, res) => {
            expect(res).to.be.a("object");
            expect(res).to.have.status(200);
            done();
          });
      });
    });
    // describe("/POST", () => {});
    // describe("/PUT", () => {});
    // describe("/DELETE", () => {});
  });
};
