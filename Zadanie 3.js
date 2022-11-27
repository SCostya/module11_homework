    function isPrime(g) {
            return function isPrime1(f){
                return g+f
            }
        }
    console.log(isPrime(3)(3));