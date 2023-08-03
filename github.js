export class Github {
  //istek atmak için gerekli bilgiler
  constructor() {
    this.client_id = "e5d78dbf55b0a6b7cd8b";
    this.client_secret = "08b225a0edf1e5147afebd295672e322854ee6eb";
    this.per_page = 10;
    this.sort = "asc";
  }

  // api den kullanıcı bilgilerini asekron fonksiyon ile alacağız
  async fetchUserData(username) {
    //parametre olarak gelen username ye göre istek attık
    const profileRes = await fetch(
      `https://api.github.com/users/${username}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const repoRes = await fetch(
      `https://api.github.com/users/${username}/repos?client_id=${this.client_id}&client_secret=${this.client_secret}&sort=${this.sort}&per_page=${this.per_page}`
    );

    //gelen cvp json a çevirme
    const data = await profileRes.json();
    const repos = await repoRes.json();

    return { data, repos };
  }
}
