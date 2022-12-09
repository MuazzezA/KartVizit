async function deleteMyCard(index, { navigation }) {
  if (index != null) {
    const resp = await fetch(
      "https://63660cb5046eddf1baf7a688.mockapi.io/api/v1/myCards/" + index,
      { method: "DELETE" }
    );
    //const data = await resp.json();
    if (resp.status == 200) {
      navigation.replace("MyCardsScreen");
      return 1;
    } else {
      return 0;
    }
  }
}

export { deleteMyCard };
