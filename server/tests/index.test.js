const { expect } = require("chai");
const chai = require("chai");
const chaiHttp = require("chai-http");

chai.use(chaiHttp);

require("./user.routes.test")(chai, expect);
require("./classrooms.routes.test")(chai, expect);
require("./answers.routes.test")(chai, expect);
require("./question.routes.test")(chai, expect);
require("./roles.routes.test")(chai, expect);
require("./themes.routes.test")(chai, expect);
