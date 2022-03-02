module.exports = (chai, expect) => {
  describe("Roles Routes", () => {
    const URL = "http://localhost:5000/roles";
    describe("/GET", () => {
      it("should return all the roles", (done) => {
        chai
          .request(URL)
          .get("/")
          .end((err, res) => {
            expect(res).to.be.a("object");
            expect(res).to.have.status(200);
            done();
          });
      });

      it("should return one the role by its id", (done) => {
        const id = 1;
        chai
          .request(URL)
          .get("/" + id)
          .end((err, res) => {
            expect(res).to.be.a("object");
            expect(res).to.have.status(200);
            done();
          });
      });
    });

    // describe("/POST", () => {
    //   it("should create a new role", (done) => {
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
    //   it("should update a role", (done) => {
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
      it("should delete a role", (done) => {
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
