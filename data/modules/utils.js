const utils = {

  /**
   * 
   * @param {string} str - La chaîen de caractère à couper  
   * @param {number} nbr - De combien de mots couper la chaîne de caractères
   * @returns - Return la nouvelle chaîne de caractères
   */
  cutStr(str, nbr) {

    const tab = str.split(" ");
    let newStr = "";

    for (let i = 0; i < nbr; i++) {
      newStr += `${tab[i]} `;
    }

    return newStr;

  }

}

module.exports = utils;