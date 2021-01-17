import emotes from "../styles/emotes.js"

let answersDetails = [];

function HandlingRatingAnswers (optionData, item){
	answersDetails.push(
		{name: item,
			data: [{
				label: emotes["trumbDown"],
				value: optionData[item].filter(item=>{if(item=='bad') return item}).length
			},
			{
				label: emotes["emojiNeutral"],
				value: optionData[item].filter(item=>{if(item=='neutral') return item}).length
			},
			{
				label: emotes["trumbUp"],
				value: optionData[item].filter(item=>{if(item=='good') return item}).length
			}]
		})
}

function HandlingPcsAnswers (optionData, item){
	let pcsInPolybag = ""
	optionData[item].forEach(elem=> pcsInPolybag += elem + " / ")
	pcsInPolybag = pcsInPolybag.slice(0, pcsInPolybag.length-2)
	answersDetails.push(
		{name: "Votes for pcs in bag",
		data:[
			{
				label: "pcs",
				value: pcsInPolybag
			}
		] 
		}
	)
}

function HandlingSizeRangeAnswers (optionData, item){
	let sizeRanges = ""
	optionData[item].forEach(elem=> sizeRanges += elem + " / ")
	sizeRanges = sizeRanges.slice(0, sizeRanges.length-2)
	answersDetails.push(
		{name: "Votes for size range",
		data:[
			{
				label: "size range",
				value: sizeRanges
			}
		] 
		}
	)
}



function HandlingResponses (optionData){
	answersDetails = []
	for(let item in optionData){
		if (optionData[item].length > 0 ){
			if (item.includes("Value")){
				HandlingRatingAnswers(optionData, item)	
			}
			else if (item.includes("pcsInBag")){
				HandlingPcsAnswers(optionData, item)			
			}
			else if(item.includes("sizeRange")){
				HandlingSizeRangeAnswers(optionData, item)
			}
		}
	}
	return answersDetails
}

export default HandlingResponses;