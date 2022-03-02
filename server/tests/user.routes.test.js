module.exports = (chai, expect) => {
  describe("Users routes", function () {
    describe("/GET", () => {
      const URL = "http://localhost:5000/users";
      describe("/users", () => {
        it("should return all records of users in the database", (done) => {
          chai
            .request(URL)
            .get("/")
            .end((err, res) => {
              expect(res).to.have.status(200);
              expect(res).to.be.a("object");
              done();
            });
        });
      });

      describe("/users/:id", () => {
        it("should return record of one user in the database", (done) => {
          const id = 1;
          chai
            .request(URL)
            .get("/" + id)
            .end((err, res) => {
              expect(res).to.have.status(200);
              done();
            });
        });
      });

      describe("/getInfos/:user_id", () => {
        it("should return a single user with his classroom and role", (done) => {
          const id = 1;
          chai
            .request(URL)
            .get("/getInfos/" + id)
            .end((err, res) => {
              expect(res).to.have.status(200);
              done();
            });
        });
      });
    });

    // describe("/DELETE", () => {
    //   it("should delete a record in the database.", (done) => {
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

    // describe("/POST", () => {
    //   it("should create a user in the database.", (done) => {});
    // });

    // describe("/PUT", () => {
    //   it("should update a user in the database.", (done) => {});
    // });
  });
};
