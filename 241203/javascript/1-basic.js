
// 조건이 2개이상 : and(&&), or(||)

// and : false가 나오면 && 이후로는 보지도않음
console.log(true&&true);
console.log(true&&false);
console.log(false&&true);
console.log(false&&false);

// or : true가 나오면 || 이후로는 보지도않음
console.log(true||true);
console.log(true||false);
console.log(false||true);
console.log(false||false);

/*
    - 암기 false : 0, null, '', undefined, NaN
    function Box(){
        return (
            <div>
                (식?<p></p>:'';)
                (식 && <p></p>)
            </div>
        )
    }
*/