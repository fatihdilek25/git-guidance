//kullanıcı arayüzü

export class UI {
  constructor() {
    this.profile = document.querySelector("#profile");
    this.repos = document.querySelector("#repos");
    this.alertArea = document.querySelector("#alert-area");
  }

  // profil arayüzünü ekrana basar
  renderProfile(data) {
    this.profile.innerHTML = `
    <div class="row border p-4 my-4">
    <div class="col-md-3">
    <img class="img-fluid rounded shadow" alt="" src='${data.avatar_url}'/>
    <a target='_blank' class='btn btn-info my-4 w-100' href="${data.html_url}">Profili göster</a>
    </div>
    <div class="col-md-9">
          <span class="badge bg-primary mt-1 fs-6">Açık Repolar:  ${data.public_repos}</span>
          <span class="badge bg-secondary mt-1 fs-6">Açık Gistler: ${data.public_gists}</span>
          <span class="badge bg-success mt-1 fs-6">Takipçiler: ${data.followers}</span>
          <span class="badge bg-info mt-1 fs-6">Takip Edilenler: ${data.following}</span>
          <ul class="list-group mt-5">
          <li class="list-group-item">Hakkında: ${data.bio}</li>
          <li class="list-group-item">şirket: ${data.company}</li>
          <li class="list-group-item">Website: ${data.blog}</li>
          <li class="list-group-item">Konum: ${data.location}</li>
          <li class="list-group-item">Hesap Oluşturma Tarihi: ${data.created_at}</li>
          </ul>
          </div>`;
  }

  renderRepos(data) {
    //repo alanını temizle
    this.repos.innerHTML = "";

    //projeleri ekrana basma
    data.forEach((repo) => {
      this.repos.innerHTML += `<div class="border row p-3 mb-4 align-items-center">
      <div class="col-6">
        <a target="_blank" href="${repo.html_url}">${repo.name}</a>
      </div>
      <div class="col-6">
        <span class="badge bg-primary">Yıldız: ${repo.forks_count}</span>
        <span class="badge bg-success">İzleyenler: ${repo.watchers}</span>
        <span class="badge bg-danger">Fork: ${repo.watchers_count}</span>
      </div>
    </div>`;
    });
  }

  // uyarı mesajlarını ekrana basma

  showAlert(message, className) {
    // uyarı divi oluşturma
    const div = document.createElement("div");

    // uyarı mesajı ekleme
    div.innerText = message;

    // sabit olan class ekleme
    div.classList.add("alert");

    // dinamik class ekleme
    div.classList.add(className);

    //eski alert i temzileme
    this.alertArea.innerHTML = '';

    // uyarıyı HTML'ye gönder
    this.alertArea.appendChild(div);

    //setTimeout: kendisine verilen fonksiyonu belirli bir süe çalıştırır
    setTimeout(() => { div.remove() }, 3000)
  }
}





