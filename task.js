
const myFunction = params => {
    /**
     * @param {number} - argument
     * @return {array} - replaced Value
     */
    let parameter = params;
    let array = [];
    const divisors = [2, 3, 5];
  
    for (var i = 1; i <= parameter; i++) {
      array.push(i);
    }
    array.forEach((value, index) => {
        divisors.forEach(divisor => {
          if (value % divisor === 0) {
            switch (divisor) {
              case 2:
                array[index] = "yu";
                break;
                case 3:
                    if (typeof array[index] === "string") {
                      array[index] = array[index].concat("-gi");
                    } else {
                      array[index] = "gi";
                    }
                    break;
                    case 5:
                        if (typeof array[index] === "string") {
                          array[index] = array[index].concat("-oh");
                        } else {
                          array[index] = "oh";
                        }
                        break;
                        default:
                            return;
                        }
                      }
                    });
                  });
                  return array;
                };
                console.log(myFunction(10));
/** output
 * [1, "yu", "gi", "yu", "oh", "yu-gi", 7, "yu", "gi", "yu-oh"]
 *  */

                