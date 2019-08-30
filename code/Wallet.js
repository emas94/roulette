class Wallet {
  constructor(money) {
    let _money = money;
    //pobieranie zawartosci portfela
    this.getWalletValue = () => _money;
    //sprawdzanie czy user moze przystapic do gry (odpowiednia ilosc srodków)
    this.checkCanPlay = (value) => {
      if (_money >= value) return true;
    }
    this.changeWallet = (value, type = "+") => {
      if (typeof value === 'number' && !isNaN(value)) {
        if (type === '+') {
          return _money += value;
        } else if (type === '-') {
          return _money -= value;
        } else {
          throw new Error('Nieprawidlowy typ działania');
        }
      } else {
        console.log(typeof value);
        throw new Error('Nieprawidlowa liczba')
      }
    }
  }

}