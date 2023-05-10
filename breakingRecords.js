const scores = [12, 24, 10, 24];

const scores2 = [10, 5, 20, 20, 4,5 , 2, 25, 1];

function breakingRecords(scores) {
	let highestScore = scores[0]; let lowestScore = scores[0];
    let brokeHigh = 0; let brokeLow = 0;
	
	scores.forEach(score => {
        if (score > highestScore){
            highestScore = score;
            brokeHigh += 1;
            return;
        }
        else if (score < lowestScore){
            lowestScore = score;
            brokeLow += 1;
            return;
        }
    });

    const result = [brokeHigh, brokeLow];

    return result;
}

breakingRecords(scores2);