import { Github } from "./github.js";
import { UI } from "./UI.js";

//clasın örneğini oluşturma

const github = new Github();
const ui = new UI();

//! htmlden gelenler

const searchInput = document.querySelector("#search-input");
const searchBtn = document.querySelector("#search-btn");

//! olay izleyiciler

searchBtn.addEventListener("click", getInput);
//! methodlar
function getInput() {
  //arama alanı dolu ise
  if (searchInput.value) {
    github
      .fetchUserData(searchInput.value)
      .then((res) => {
        console.log(res);
        if (res.data.message === "Not Found") {
          ui.showAlert("Aradığınız Kullanıcı Bulunamadı", "alert-info");
        } else {
          ui.showAlert("Aradığınız kullanıcı başarıyla bulundu", "alert-success");
          ui.renderProfile(res.data);
          ui.renderRepos(res.repos);
        }
      })
      .catch((err) => console.log(err));
    return;
  }

  //arama alanı boş ise
  ui.showAlert("Lütfen geçerli bir isim giriniz", "alert-warning");
}

// mod değişimi
const modBtn = document.querySelector("#mod-btn");
const body = document.querySelector("body");
const logo = document.querySelector('#logo')

modBtn.addEventListener("click", changeMod);
function changeMod() {
  if (body.classList == "bg-dark text-bg-dark") {
    body.classList.remove("bg-dark", "text-bg-dark");
    modBtn.innerText = "Koyu Mod";
    logo.classList.add('text-dark');
  } else {
    body.classList.add("bg-dark", "text-bg-dark");
    modBtn.innerText = "Açık Mod";
    logo.classList.remove('text-dark');

  }
  return;

}
