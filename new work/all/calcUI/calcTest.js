QUnit.test("It should handle key press", function( assert ) {
	$('#1').click();
	$('#2').click();
	$('#3').click();
	num = calculatorUI.getDisplay() ;
    assert.ok( num ==123 , "Passed!" );
});
QUnit.test("It should mutiply two numbers1", function( assert ) {
	$('#1').click();
	$('#multiply').click();
	$('#3').click();
	$('#equal').click();
	num = calculatorUI.getDisplay() ;
    assert.ok( num ==3 , "Passed!" );
});
QUnit.test("It should mutiply two numbers", function( assert ) {
	$('#2').click();
	$('#minus').click();
	$('#9').click();
	$('#equal').click();
	num = calculatorUI.getDisplay() ;
    assert.ok( num !=-7 , "disPassed!" );
	
});
QUnit.test("It should handle key press", function( assert ) {
	$('#1').click();
	$('#3').click();
	$('#dot').click();
	$('#8').click();
	$('#8').click();
	num = calculatorUI.getDisplay() ;
    assert.ok( num ==13.88 , "Passed!" );
});
QUnit.test("It should mutiply two numbers", function( assert ) {
	$('#2').click();
	$('#plus').click();
	$('#9').click();
	$('#8').click();
	$('#equal').click();
	num = calculatorUI.getDisplay() ;
    assert.ok( num !=100 , " disPassed!" );
    $('#0').click();
	$('#plus').click();
	$('#5').click();
	$('#equal').click();
	num = calculatorUI.getDisplay() ;
    assert.ok( num !=5 , " disPassed!" );
});