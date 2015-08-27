/**
    * Returns an array of a specified length containing a random subset of elements from a given array. 
    * The maximum allowed length is equal to the length of the original array.
	*
	* 
    * @param {[[Array]]} array: The original array
    * @param {[Length]} length: The requested length
    */


module.exports = function (array, length){
	var subsetArray = []; 
	array = array.slice();

	var desiredLength = Math.min(length, array.length);

	var wordCount = 0;
	for(var i=0; wordCount<desiredLength;i++){
		var index = Math.round(Math.random() * (array.length - 1)) 
		var item = array[index];

		subsetArray.push(item);
		array.splice(index, 1);
		wordCount++;
		
	}
	console.log(subsetArray);
	return subsetArray; 
}