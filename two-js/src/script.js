const container = document.querySelector("section");

let params = {
  width: 500,
  height: 500
};


const two = new Two(params);

two.appendTo(container);


let shape13 = two.makeRectangle(250, 250, 700, 700);
let shape12 = two.makeRectangle(250, 250, 650, 650);
let shape11 = two.makeRectangle(250, 250, 600, 600);
let shape10 = two.makeRectangle(250, 250, 550, 550);
let shape9 = two.makeRectangle(250, 250, 500, 500);
let shape8 = two.makeRectangle(250, 250, 450, 450);
let shape7 = two.makeRectangle(250, 250, 400, 400);
let shape6 = two.makeRectangle(250, 250, 350, 350);
let shape5 = two.makeRectangle(250, 250, 300, 300);
let shape4 = two.makeRectangle(250, 250, 250, 250);
let shape3 = two.makeRectangle(250, 250, 200, 200);
let shape2 = two.makeRectangle(250, 250, 150, 150);
let shape = two.makeRectangle(250, 250, 100, 100);


shape.fill = "#ED4D6E";
shape.noStroke();

shape2.fill = "#32E875";
shape2.noStroke();

shape3.fill = "#ED4D6E";
shape3.noStroke();

shape4.fill = "#32E875";
shape4.noStroke();

shape5.fill = "#ED4D6E";
shape5.noStroke();

shape6.fill = "#32E875";
shape6.noStroke();

shape7.fill = "#ED4D6E";
shape7.noStroke();

shape8.fill = "#32E875";
shape8.noStroke();

shape9.fill = "#ED4D6E";
shape9.noStroke();

shape10.fill = "#32E875";
shape10.noStroke();

shape11.fill = "#ED4D6E";
shape11.noStroke();

shape12.fill = "#32E875";
shape12.noStroke();

shape13.fill = "#32E875";
shape13.noStroke();

// rotate shape. Default is radians
shape.rotation = Math.PI * 0.25;

// Bind to "Update" function
two.bind("update", () => {
  shape.rotation += 0.1;
});

shape2.rotation = Math.PI * 0.25;
two.bind("update", () => {
  shape2.rotation += 0.09;
});

shape3.rotation = Math.PI * 0.25;
two.bind("update", () => {
  shape3.rotation += 0.08;
});

shape4.rotation = Math.PI * 0.25;
two.bind("update", () => {
  shape4.rotation += 0.07;
});

shape5.rotation = Math.PI * 0.25;
two.bind("update", () => {
  shape5.rotation += 0.06;
});

shape6.rotation = Math.PI * 0.25;
two.bind("update", () => {
  shape6.rotation += 0.05;
});

shape7.rotation = Math.PI * 0.25;
two.bind("update", () => {
  shape7.rotation += 0.04;
});

shape8.rotation = Math.PI * 0.25;
two.bind("update", () => {
  shape8.rotation += 0.03;
});

shape9.rotation = Math.PI * 0.25;
two.bind("update", () => {
  shape9.rotation += 0.02;
});

shape10.rotation = Math.PI * 0.25;
two.bind("update", () => {
  shape10.rotation += 0.01;
});

shape11.rotation = Math.PI * 0.25;
two.bind("update", () => {
  shape11.rotation += 0.009;
});

shape12.rotation = Math.PI * 0.25;
two.bind("update", () => {
  shape12.rotation += 0.008;
});

shape13.rotation = Math.PI * 0.25;
two.bind("update", () => {
  shape13.rotation += 0.007;
});

two.play();
