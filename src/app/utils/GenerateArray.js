import car1 from "../images/car1.png";
import car2 from "../images/car2.png";
import car3 from "../images/car3.png";
import car4 from "../images/car4.png";
import car5 from "../images/car5.png";
import car6 from "../images/car6.png";
import car7 from "../images/car7.png";

export const GenerateArray = (arrs) => {
  const items = [car1, car2, car3, car4, car5, car6, car7];

  const gh = [];
  for (let i = 0; i < arrs.length; i++) {
    const random = Math.floor(Math.random() * 7);
    gh.push(items[random]);
  }
  return gh;
};
