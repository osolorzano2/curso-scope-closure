// function moneyBox(coins) {
//     let saveCoins = 0;
//     saveCoins += coins;
//     console.log(`MoneyBox $${saveCoins}`);
// }

// moneyBox(5);
// moneyBox(4);

function moneyBox() {
    let saveCoins = 0;
    function countCoins(coins) {
        saveCoins += coins;
        console.log(`MoneyBox $${saveCoins}`);
    }
    return countCoins
}

const myMoneyBox = moneyBox();
myMoneyBox(5);
myMoneyBox(5);
myMoneyBox(15);

const moneyBoxAna = moneyBox();
moneyBoxAna(10);
moneyBoxAna(12);



function createPetList() {
    const PetList = [];
    function rememberPets(newPet) {
        if (newPet === undefined) {
            return PetList;
        }
        PetList.push(newPet);
        console.log(PetList)
    }
    return rememberPets
  }
  const oscarPetList = createPetList();

  oscarPetList("michi");
  oscarPetList("gato");
  oscarPetList();
