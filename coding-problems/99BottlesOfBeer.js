/*
Instructions
Complete the function that returns the lyrics for the song 99 Bottles of Beer as an array of strings: each line should be a separate element - see the example at the bottom.

Note: in order to avoid hardcoded solutions, the size of your code is limited to 1000 characters

Lyrics
99 bottles of beer on the wall, 99 bottles of beer.
Take one down and pass it around, 98 bottles of beer on the wall.

98 bottles of beer on the wall, 98 bottles of beer.
Take one down and pass it around, 97 bottles of beer on the wall.

...and so on...

3 bottles of beer on the wall, 3 bottles of beer.
Take one down and pass it around, 2 bottles of beer on the wall.

2 bottles of beer on the wall, 2 bottles of beer.
Take one down and pass it around, 1 bottle of beer on the wall.

1 bottle of beer on the wall, 1 bottle of beer.
Take one down and pass it around, no more bottles of beer on the wall.

No more bottles of beer on the wall, no more bottles of beer.
Go to the store and buy some more, 99 bottles of beer on the wall.
*/

const bottlesOfBeer = () => {
    let bottles;
    let noBottles;
    for( i = 100; i >= 1; i--){
         if (i == 1){
            let bottles = 'bottle';
            console.log(`1 ${bottles} of beer on the wall, 1 ${bottles} of beer.\n`);
            console.log('Take one down and pass it around, 1 bottle of beer on the wall.\n');
            console.log('No more bottles of beer on the wall no more bottles of beer.\n')
            console.log('Go to the store and buy some more, 99 bottles of beer on the wall.\n')
            
        } else{
            noBottles = i - 1;

        console.log(`${noBottles} bottles of beer on the wall, ${noBottles} bottles of beer.\n`);
        console.log(`Take one down and pass it around, ${noBottles} bottles of beer on the wall.\n`);
        }
    }
}

console.log(bottlesOfBeer());
