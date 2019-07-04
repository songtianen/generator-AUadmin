const Generator = require("yeoman-generator");
const chalk = require("chalk");
const yosay = require("yosay");
module.exports = class extends Generator {
  prompting() {
    this.log(
      yosay(
        "Welcome to the prime " + chalk.red("generator-auadmin") + " generator!"
      )
    );
    const prompts = [
      {
        type: "input",
        name: "appName",
        message: "What is your project name ?",
        default: "au-admin"
      }
    ];
    return this.prompt(prompts).then(props => {
      this.props = props;
    });
  }
  writing() {
    this.fs.copy(this.templatePath("config/"), this.destinationPath("config/"));
    this.fs.copy(this.templatePath("src/"), this.destinationPath("src/"));
    this.fs.copy(this.templatePath("server/"), this.destinationPath("server/"));
    this.fs.copy(
      this.templatePath("src/.eslintrc.json"),
      this.destinationPath("src/.eslintrc.json")
    );
    this.fs.copy(
      this.templatePath(".babelrc.js"),
      this.destinationPath(".babelrc.js")
    );
    this.fs.copy(
      this.templatePath("package.json"),
      this.destinationPath("package.json")
    );
    // ---
    this.fs.copy(
      this.templatePath("nodemon.json"),
      this.destinationPath("nodemon.json")
    );
    this.fs.copy(
      this.templatePath("theme.js"),
      this.destinationPath("theme.js")
    );
    this.fs.copy(
      this.templatePath("favicon.ico"),
      this.destinationPath("favicon.ico")
    );
    this.fs.copy(
      this.templatePath(".prettierrc.js"),
      this.destinationPath(".prettierrc.js")
    );
    this.fs.copy(
      this.templatePath(".eslintrc.json"),
      this.destinationPath(".eslintrc.json")
    );
    this.fs.copy(
      this.templatePath(".editorconfig"),
      this.destinationPath(".editorconfig")
    );
    this.fs.copy(
      this.templatePath(".gitignore"),
      this.destinationPath(".gitignore")
    );
    this.fs.copy(
      this.templatePath("README.md"),
      this.destinationPath("README.md")
    );
    this.fs.copy(
      this.templatePath("yarn.lock"),
      this.destinationPath("yarn.lock")
    );
  }
};
