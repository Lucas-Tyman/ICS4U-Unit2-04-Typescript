/**
* This program uses the MrCoxallStack
*
* By: Lucas Tyman
* Version: 1.0
* Since:   2024-05-06
*/

import { MrCoxallStack } from './MrCoxallStack'

const catStack = new MrCoxallStack()

// Checksize of stack
console.log("The size of the stack is: ", catStack.size)

// Check boolean is empty
console.log("Is the stack empty? ", catStack.isEmpty)

// Print fruit items
catStack.push("calico")
catStack.push("siamese")
catStack.push("ginger")
console.log("Cat items: ", catStack.showStack())

// Look at the top element of the array
console.log("The top value is", catStack.peekItem)

// Shows the popped item and new list
const topCat = catStack.pop()
console.log("Pop cat item: ", topCat)
console.log("Cat items: ", catStack.showStack())

// Checksize of stack
console.log("The size of the stack is: ", catStack.size)

// Check boolean is empty
console.log("Is the stack empty? ", catStack.isEmpty)

// Clear the stack
console.log('\nEmptying stack...')
catStack.clearStack()

// Checksize of stack
console.log("The size of the stack is: ", catStack.size)

// Check boolean is empty
console.log("Is the stack empty? ", catStack.isEmpty)

// Show the program as done
console.log('\nDone.')