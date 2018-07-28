function myFirstApp(name, age) {

    alert("Привет, меня зовут " + name + " и это моя первая программа!");

   function showSkills() {
   	let skills = ["html", "css", "photoshop", "svg", "bootstrap", "gulp"];


    document.write("В списке моих скиллов сейчас: </br> ");
   	for (let i = 0; i < skills.length; i++) {
      document.write(skills[i] + "</br>");
   	}
   }
   showSkills();

   function checkAge() {
   	let age = confirm("Есть ли вам 18 лет?");
   	if (age) {
   		document.write("Добро пожаловать в наш клуб!");
   	} else {
   		document.write("Какой javascript? а как же майнкрафт?");
   	}
   }
   checkAge()
}
myFirstApp("Artem", 18)