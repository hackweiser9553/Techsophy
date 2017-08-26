"use strict"
import React from 'react';
export function booksReducers(state={books:
	[{
				
		_id: 1,
		title: 1,
		description: 'this is 1st book description',
		price: 100,
		image: <img src="/images/13.jpg"/>
	},
	{
		_id: 2,
		title: 'this is 2nd book',
		description: 'this is the 2nd book description',
		price: 50
	},
	{
		_id: 3,
		title: 'this is 3rd book',
		description: 'this is third book description',
		price: 44
	},	

	{
		_id: 4,
		title: 'this is 4th book',
		description: 'this is 4th book description',
		price: 4
	},
	{
		_id: 5,
		title: 'this is 5th book',
		description: 'this is 5th book description',
		price: 32
	},	
	{
		_id: 6,
		title: 'this is 6th book',
		description: 'this is 6th book description',
		price: 84		
			
	}]
}, action){
	switch(action.type){
		case "GET_BOOKS":
		return {...state, books:[...state.books]}
		break;
		case "POST_BOOK":

		return {books: [...state.books, ...action.payload]}
		break;
		
		case "DELETE_BOOK":
		const currentBookToDelete = [...state.books]

		const indexToDelete = currentBookToDelete.findIndex(
			function(book){
				return book._id === action.payload._id;

			}
			)
		return {books: [...currentBookToDelete.slice(0, indexToDelete),
		...currentBookToDelete.slice(indexToDelete + 1)]}
		break;

		case "UPDATE_BOOK":
		const currentBookToUpdate = [...state.books]

		const indexToUpdate = currentBookToUpdate.findIndex(
			function(book){
				return book._id === action.payload._id;
			}
		)

		const newBookTOUpdate = {
			...currentBookToUpdate[indexToUpdate],
			title: action.payload.title
		}

		console.log("what is it newBookTOUpdate", newBookTOUpdate);

		return{books: [...currentBookToUpdate.slice(0, indexToUpdate), newBookTOUpdate, ...currentBookToUpdate.slice(indexToUpdate + 1)]}
		break;
	}
	return state
}		