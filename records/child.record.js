class ChildRecord {
  static listAll() {
    return [
      { id: "djks", name: "Ania", gift: "Domek dla lalek" },
      { id: "abcd", name: "Piotrek", gift: "Samochodzik" },
      { id: "fkdd", name: "Zuzia", gift: "Barbie" },
    ];
  }
}

module.exports = {
  ChildRecord,
};
