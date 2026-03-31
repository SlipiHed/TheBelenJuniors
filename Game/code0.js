gdjs.Main_95SceneCode = {};
gdjs.Main_95SceneCode.localVariables = [];
gdjs.Main_95SceneCode.idToCallbackMap = new Map();
gdjs.Main_95SceneCode.GDPlayerObjects1= [];
gdjs.Main_95SceneCode.GDPlayerObjects2= [];
gdjs.Main_95SceneCode.GDPlayerObjects3= [];
gdjs.Main_95SceneCode.GDTABLE_9595CHAIRSObjects1= [];
gdjs.Main_95SceneCode.GDTABLE_9595CHAIRSObjects2= [];
gdjs.Main_95SceneCode.GDTABLE_9595CHAIRSObjects3= [];
gdjs.Main_95SceneCode.GDWALLSObjects1= [];
gdjs.Main_95SceneCode.GDWALLSObjects2= [];
gdjs.Main_95SceneCode.GDWALLSObjects3= [];
gdjs.Main_95SceneCode.GDCollissionObjects1= [];
gdjs.Main_95SceneCode.GDCollissionObjects2= [];
gdjs.Main_95SceneCode.GDCollissionObjects3= [];
gdjs.Main_95SceneCode.GDCollission2Objects1= [];
gdjs.Main_95SceneCode.GDCollission2Objects2= [];
gdjs.Main_95SceneCode.GDCollission2Objects3= [];
gdjs.Main_95SceneCode.GDNewTextObjects1= [];
gdjs.Main_95SceneCode.GDNewTextObjects2= [];
gdjs.Main_95SceneCode.GDNewTextObjects3= [];
gdjs.Main_95SceneCode.GDComputersObjects1= [];
gdjs.Main_95SceneCode.GDComputersObjects2= [];
gdjs.Main_95SceneCode.GDComputersObjects3= [];
gdjs.Main_95SceneCode.GDFLOORSObjects1= [];
gdjs.Main_95SceneCode.GDFLOORSObjects2= [];
gdjs.Main_95SceneCode.GDFLOORSObjects3= [];
gdjs.Main_95SceneCode.GDGeneralObjects1= [];
gdjs.Main_95SceneCode.GDGeneralObjects2= [];
gdjs.Main_95SceneCode.GDGeneralObjects3= [];
gdjs.Main_95SceneCode.GDWeb_9595BGObjects1= [];
gdjs.Main_95SceneCode.GDWeb_9595BGObjects2= [];
gdjs.Main_95SceneCode.GDWeb_9595BGObjects3= [];
gdjs.Main_95SceneCode.GDtopObjects1= [];
gdjs.Main_95SceneCode.GDtopObjects2= [];
gdjs.Main_95SceneCode.GDtopObjects3= [];
gdjs.Main_95SceneCode.GDCollission3Objects1= [];
gdjs.Main_95SceneCode.GDCollission3Objects2= [];
gdjs.Main_95SceneCode.GDCollission3Objects3= [];
gdjs.Main_95SceneCode.GDCollission4Objects1= [];
gdjs.Main_95SceneCode.GDCollission4Objects2= [];
gdjs.Main_95SceneCode.GDCollission4Objects3= [];
gdjs.Main_95SceneCode.GDCollission5Objects1= [];
gdjs.Main_95SceneCode.GDCollission5Objects2= [];
gdjs.Main_95SceneCode.GDCollission5Objects3= [];
gdjs.Main_95SceneCode.GDbg2Objects1= [];
gdjs.Main_95SceneCode.GDbg2Objects2= [];
gdjs.Main_95SceneCode.GDbg2Objects3= [];
gdjs.Main_95SceneCode.GDbg3Objects1= [];
gdjs.Main_95SceneCode.GDbg3Objects2= [];
gdjs.Main_95SceneCode.GDbg3Objects3= [];
gdjs.Main_95SceneCode.GDbg4Objects1= [];
gdjs.Main_95SceneCode.GDbg4Objects2= [];
gdjs.Main_95SceneCode.GDbg4Objects3= [];
gdjs.Main_95SceneCode.GDcollissionwallObjects1= [];
gdjs.Main_95SceneCode.GDcollissionwallObjects2= [];
gdjs.Main_95SceneCode.GDcollissionwallObjects3= [];


gdjs.Main_95SceneCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Main_95SceneCode.GDPlayerObjects2);
{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 4, "", 0);
}
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.Main_95SceneCode.GDPlayerObjects2.length !== 0 ? gdjs.Main_95SceneCode.GDPlayerObjects2[0] : null), true, "", 0);
}
{gdjs.evtTools.sound.playMusic(runtimeScene, "backgroundmusic.mp3", true, 50, 1);
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Main_95SceneCode.GDPlayerObjects1);
{gdjs.evtTools.camera.setCameraX(runtimeScene, gdjs.evtTools.common.lerp(gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0), (( gdjs.Main_95SceneCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Main_95SceneCode.GDPlayerObjects1[0].getPointX("")), 0.05), "", 0);
}
{gdjs.evtTools.camera.setCameraY(runtimeScene, gdjs.evtTools.common.lerp(gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0), (( gdjs.Main_95SceneCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Main_95SceneCode.GDPlayerObjects1[0].getPointY("")), 0.05), "", 0);
}
{gdjs.evtTools.camera.clampCamera(runtimeScene, -(16), -(16), 544, 432, "", 0);
}
}

}


};gdjs.Main_95SceneCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Main_95SceneCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.Main_95SceneCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Main_95SceneCode.GDPlayerObjects2[i].getBehavior("Animation").setAnimationName("RUN_SIDE");
}
}
{for(var i = 0, len = gdjs.Main_95SceneCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Main_95SceneCode.GDPlayerObjects2[i].getBehavior("Flippable").flipX(false);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Main_95SceneCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.Main_95SceneCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Main_95SceneCode.GDPlayerObjects2[i].getBehavior("Animation").setAnimationName("RUN_SIDE");
}
}
{for(var i = 0, len = gdjs.Main_95SceneCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Main_95SceneCode.GDPlayerObjects2[i].getBehavior("Flippable").flipX(true);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Main_95SceneCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.Main_95SceneCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Main_95SceneCode.GDPlayerObjects2[i].getBehavior("Animation").setAnimationName("RUN_UP");
}
}
{for(var i = 0, len = gdjs.Main_95SceneCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Main_95SceneCode.GDPlayerObjects2[i].getBehavior("Flippable").flipX(false);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Main_95SceneCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.Main_95SceneCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Main_95SceneCode.GDPlayerObjects2[i].getBehavior("Animation").setAnimationName("RUN_DOWN");
}
}
{for(var i = 0, len = gdjs.Main_95SceneCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Main_95SceneCode.GDPlayerObjects2[i].getBehavior("Flippable").flipX(false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Main_95SceneCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Main_95SceneCode.GDPlayerObjects1.length;i<l;++i) {
    if ( !(gdjs.Main_95SceneCode.GDPlayerObjects1[i].getBehavior("TopDownMovement").isMoving()) ) {
        isConditionTrue_0 = true;
        gdjs.Main_95SceneCode.GDPlayerObjects1[k] = gdjs.Main_95SceneCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Main_95SceneCode.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Main_95SceneCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Main_95SceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Main_95SceneCode.GDPlayerObjects1[i].getBehavior("Animation").setAnimationName("IDLE");
}
}
{for(var i = 0, len = gdjs.Main_95SceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Main_95SceneCode.GDPlayerObjects1[i].getBehavior("Flippable").flipX(false);
}
}
}

}


};gdjs.Main_95SceneCode.mapOfGDgdjs_9546Main_959595SceneCode_9546GDTABLE_95959595CHAIRSObjects2ObjectsGDgdjs_9546Main_959595SceneCode_9546GDWALLSObjects2ObjectsGDgdjs_9546Main_959595SceneCode_9546GDComputersObjects2ObjectsGDgdjs_9546Main_959595SceneCode_9546GDcollissionwallObjects2Objects = Hashtable.newFrom({"TABLE_CHAIRS": gdjs.Main_95SceneCode.GDTABLE_9595CHAIRSObjects2, "WALLS": gdjs.Main_95SceneCode.GDWALLSObjects2, "Computers": gdjs.Main_95SceneCode.GDComputersObjects2, "collissionwall": gdjs.Main_95SceneCode.GDcollissionwallObjects2});
gdjs.Main_95SceneCode.mapOfGDgdjs_9546Main_959595SceneCode_9546GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs.Main_95SceneCode.GDPlayerObjects2});
gdjs.Main_95SceneCode.mapOfGDgdjs_9546Main_959595SceneCode_9546GDCollissionObjects2Objects = Hashtable.newFrom({"Collission": gdjs.Main_95SceneCode.GDCollissionObjects2});
gdjs.Main_95SceneCode.mapOfGDgdjs_9546Main_959595SceneCode_9546GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs.Main_95SceneCode.GDPlayerObjects2});
gdjs.Main_95SceneCode.mapOfGDgdjs_9546Main_959595SceneCode_9546GDCollissionObjects2Objects = Hashtable.newFrom({"Collission": gdjs.Main_95SceneCode.GDCollissionObjects2});
gdjs.Main_95SceneCode.asyncCallback116563380 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Main_95SceneCode.localVariables);
{gdjs.evtTools.camera.hideLayer(runtimeScene, "Layer2");
}
gdjs.Main_95SceneCode.localVariables.length = 0;
}
gdjs.Main_95SceneCode.idToCallbackMap.set(116563380, gdjs.Main_95SceneCode.asyncCallback116563380);
gdjs.Main_95SceneCode.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Main_95SceneCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.Main_95SceneCode.asyncCallback116563380(runtimeScene, asyncObjectsList)), 116563380, asyncObjectsList);
}
}

}


};gdjs.Main_95SceneCode.mapOfGDgdjs_9546Main_959595SceneCode_9546GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs.Main_95SceneCode.GDPlayerObjects2});
gdjs.Main_95SceneCode.mapOfGDgdjs_9546Main_959595SceneCode_9546GDCollission2Objects2Objects = Hashtable.newFrom({"Collission2": gdjs.Main_95SceneCode.GDCollission2Objects2});
gdjs.Main_95SceneCode.mapOfGDgdjs_9546Main_959595SceneCode_9546GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs.Main_95SceneCode.GDPlayerObjects2});
gdjs.Main_95SceneCode.mapOfGDgdjs_9546Main_959595SceneCode_9546GDCollission2Objects2Objects = Hashtable.newFrom({"Collission2": gdjs.Main_95SceneCode.GDCollission2Objects2});
gdjs.Main_95SceneCode.asyncCallback201348732 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Main_95SceneCode.localVariables);
{gdjs.evtTools.camera.hideLayer(runtimeScene, "WebDeveloper");
}
gdjs.Main_95SceneCode.localVariables.length = 0;
}
gdjs.Main_95SceneCode.idToCallbackMap.set(201348732, gdjs.Main_95SceneCode.asyncCallback201348732);
gdjs.Main_95SceneCode.eventsList3 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Main_95SceneCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.Main_95SceneCode.asyncCallback201348732(runtimeScene, asyncObjectsList)), 201348732, asyncObjectsList);
}
}

}


};gdjs.Main_95SceneCode.mapOfGDgdjs_9546Main_959595SceneCode_9546GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs.Main_95SceneCode.GDPlayerObjects2});
gdjs.Main_95SceneCode.mapOfGDgdjs_9546Main_959595SceneCode_9546GDCollission3Objects2Objects = Hashtable.newFrom({"Collission3": gdjs.Main_95SceneCode.GDCollission3Objects2});
gdjs.Main_95SceneCode.mapOfGDgdjs_9546Main_959595SceneCode_9546GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs.Main_95SceneCode.GDPlayerObjects2});
gdjs.Main_95SceneCode.mapOfGDgdjs_9546Main_959595SceneCode_9546GDCollission3Objects2Objects = Hashtable.newFrom({"Collission3": gdjs.Main_95SceneCode.GDCollission3Objects2});
gdjs.Main_95SceneCode.asyncCallback201332148 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Main_95SceneCode.localVariables);
{gdjs.evtTools.camera.hideLayer(runtimeScene, "bg2");
}
gdjs.Main_95SceneCode.localVariables.length = 0;
}
gdjs.Main_95SceneCode.idToCallbackMap.set(201332148, gdjs.Main_95SceneCode.asyncCallback201332148);
gdjs.Main_95SceneCode.eventsList4 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Main_95SceneCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.Main_95SceneCode.asyncCallback201332148(runtimeScene, asyncObjectsList)), 201332148, asyncObjectsList);
}
}

}


};gdjs.Main_95SceneCode.mapOfGDgdjs_9546Main_959595SceneCode_9546GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs.Main_95SceneCode.GDPlayerObjects2});
gdjs.Main_95SceneCode.mapOfGDgdjs_9546Main_959595SceneCode_9546GDCollission4Objects2Objects = Hashtable.newFrom({"Collission4": gdjs.Main_95SceneCode.GDCollission4Objects2});
gdjs.Main_95SceneCode.mapOfGDgdjs_9546Main_959595SceneCode_9546GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs.Main_95SceneCode.GDPlayerObjects2});
gdjs.Main_95SceneCode.mapOfGDgdjs_9546Main_959595SceneCode_9546GDCollission4Objects2Objects = Hashtable.newFrom({"Collission4": gdjs.Main_95SceneCode.GDCollission4Objects2});
gdjs.Main_95SceneCode.asyncCallback201367244 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Main_95SceneCode.localVariables);
{gdjs.evtTools.camera.hideLayer(runtimeScene, "bg3");
}
gdjs.Main_95SceneCode.localVariables.length = 0;
}
gdjs.Main_95SceneCode.idToCallbackMap.set(201367244, gdjs.Main_95SceneCode.asyncCallback201367244);
gdjs.Main_95SceneCode.eventsList5 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Main_95SceneCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.Main_95SceneCode.asyncCallback201367244(runtimeScene, asyncObjectsList)), 201367244, asyncObjectsList);
}
}

}


};gdjs.Main_95SceneCode.mapOfGDgdjs_9546Main_959595SceneCode_9546GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs.Main_95SceneCode.GDPlayerObjects2});
gdjs.Main_95SceneCode.mapOfGDgdjs_9546Main_959595SceneCode_9546GDCollission5Objects2Objects = Hashtable.newFrom({"Collission5": gdjs.Main_95SceneCode.GDCollission5Objects2});
gdjs.Main_95SceneCode.mapOfGDgdjs_9546Main_959595SceneCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Main_95SceneCode.GDPlayerObjects1});
gdjs.Main_95SceneCode.mapOfGDgdjs_9546Main_959595SceneCode_9546GDCollission5Objects1Objects = Hashtable.newFrom({"Collission5": gdjs.Main_95SceneCode.GDCollission5Objects1});
gdjs.Main_95SceneCode.asyncCallback116499284 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Main_95SceneCode.localVariables);
{gdjs.evtTools.camera.hideLayer(runtimeScene, "bg4");
}
gdjs.Main_95SceneCode.localVariables.length = 0;
}
gdjs.Main_95SceneCode.idToCallbackMap.set(116499284, gdjs.Main_95SceneCode.asyncCallback116499284);
gdjs.Main_95SceneCode.eventsList6 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Main_95SceneCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.Main_95SceneCode.asyncCallback116499284(runtimeScene, asyncObjectsList)), 116499284, asyncObjectsList);
}
}

}


};gdjs.Main_95SceneCode.eventsList7 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Computers"), gdjs.Main_95SceneCode.GDComputersObjects2);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Main_95SceneCode.GDPlayerObjects2);
gdjs.copyArray(runtimeScene.getObjects("TABLE_CHAIRS"), gdjs.Main_95SceneCode.GDTABLE_9595CHAIRSObjects2);
gdjs.copyArray(runtimeScene.getObjects("WALLS"), gdjs.Main_95SceneCode.GDWALLSObjects2);
gdjs.copyArray(runtimeScene.getObjects("collissionwall"), gdjs.Main_95SceneCode.GDcollissionwallObjects2);
{for(var i = 0, len = gdjs.Main_95SceneCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Main_95SceneCode.GDPlayerObjects2[i].separateFromObjectsList(gdjs.Main_95SceneCode.mapOfGDgdjs_9546Main_959595SceneCode_9546GDTABLE_95959595CHAIRSObjects2ObjectsGDgdjs_9546Main_959595SceneCode_9546GDWALLSObjects2ObjectsGDgdjs_9546Main_959595SceneCode_9546GDComputersObjects2ObjectsGDgdjs_9546Main_959595SceneCode_9546GDcollissionwallObjects2Objects, false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Collission"), gdjs.Main_95SceneCode.GDCollissionObjects2);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Main_95SceneCode.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Main_95SceneCode.mapOfGDgdjs_9546Main_959595SceneCode_9546GDPlayerObjects2Objects, gdjs.Main_95SceneCode.mapOfGDgdjs_9546Main_959595SceneCode_9546GDCollissionObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.Main_95SceneCode.GDNewTextObjects2);
{gdjs.evtTools.camera.showLayer(runtimeScene, "Layer2");
}
{for(var i = 0, len = gdjs.Main_95SceneCode.GDNewTextObjects2.length ;i < len;++i) {
    gdjs.Main_95SceneCode.GDNewTextObjects2[i].getBehavior("Tween").addObjectOpacityTween2("none", 255, "linear", 1, false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Collission"), gdjs.Main_95SceneCode.GDCollissionObjects2);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Main_95SceneCode.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Main_95SceneCode.mapOfGDgdjs_9546Main_959595SceneCode_9546GDPlayerObjects2Objects, gdjs.Main_95SceneCode.mapOfGDgdjs_9546Main_959595SceneCode_9546GDCollissionObjects2Objects, true, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(132952076);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.Main_95SceneCode.GDNewTextObjects2);
{for(var i = 0, len = gdjs.Main_95SceneCode.GDNewTextObjects2.length ;i < len;++i) {
    gdjs.Main_95SceneCode.GDNewTextObjects2[i].getBehavior("Tween").addObjectOpacityTween2("none", 0, "linear", 1, false);
}
}

{ //Subevents
gdjs.Main_95SceneCode.eventsList2(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Collission2"), gdjs.Main_95SceneCode.GDCollission2Objects2);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Main_95SceneCode.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Main_95SceneCode.mapOfGDgdjs_9546Main_959595SceneCode_9546GDPlayerObjects2Objects, gdjs.Main_95SceneCode.mapOfGDgdjs_9546Main_959595SceneCode_9546GDCollission2Objects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Web_BG"), gdjs.Main_95SceneCode.GDWeb_9595BGObjects2);
{gdjs.evtTools.camera.showLayer(runtimeScene, "WebDeveloper");
}
{for(var i = 0, len = gdjs.Main_95SceneCode.GDWeb_9595BGObjects2.length ;i < len;++i) {
    gdjs.Main_95SceneCode.GDWeb_9595BGObjects2[i].getBehavior("Tween").addObjectOpacityTween2("none", 255, "linear", 1, false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Collission2"), gdjs.Main_95SceneCode.GDCollission2Objects2);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Main_95SceneCode.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Main_95SceneCode.mapOfGDgdjs_9546Main_959595SceneCode_9546GDPlayerObjects2Objects, gdjs.Main_95SceneCode.mapOfGDgdjs_9546Main_959595SceneCode_9546GDCollission2Objects2Objects, true, runtimeScene, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Web_BG"), gdjs.Main_95SceneCode.GDWeb_9595BGObjects2);
{for(var i = 0, len = gdjs.Main_95SceneCode.GDWeb_9595BGObjects2.length ;i < len;++i) {
    gdjs.Main_95SceneCode.GDWeb_9595BGObjects2[i].getBehavior("Tween").addObjectOpacityTween2("none", 0, "linear", 1, false);
}
}

{ //Subevents
gdjs.Main_95SceneCode.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Collission3"), gdjs.Main_95SceneCode.GDCollission3Objects2);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Main_95SceneCode.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Main_95SceneCode.mapOfGDgdjs_9546Main_959595SceneCode_9546GDPlayerObjects2Objects, gdjs.Main_95SceneCode.mapOfGDgdjs_9546Main_959595SceneCode_9546GDCollission3Objects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("bg2"), gdjs.Main_95SceneCode.GDbg2Objects2);
{gdjs.evtTools.camera.showLayer(runtimeScene, "bg2");
}
{for(var i = 0, len = gdjs.Main_95SceneCode.GDbg2Objects2.length ;i < len;++i) {
    gdjs.Main_95SceneCode.GDbg2Objects2[i].getBehavior("Tween").addObjectOpacityTween2("none", 255, "linear", 1, false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Collission3"), gdjs.Main_95SceneCode.GDCollission3Objects2);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Main_95SceneCode.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Main_95SceneCode.mapOfGDgdjs_9546Main_959595SceneCode_9546GDPlayerObjects2Objects, gdjs.Main_95SceneCode.mapOfGDgdjs_9546Main_959595SceneCode_9546GDCollission3Objects2Objects, true, runtimeScene, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("bg2"), gdjs.Main_95SceneCode.GDbg2Objects2);
{for(var i = 0, len = gdjs.Main_95SceneCode.GDbg2Objects2.length ;i < len;++i) {
    gdjs.Main_95SceneCode.GDbg2Objects2[i].getBehavior("Tween").addObjectOpacityTween2("none", 0, "linear", 1, false);
}
}

{ //Subevents
gdjs.Main_95SceneCode.eventsList4(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Collission4"), gdjs.Main_95SceneCode.GDCollission4Objects2);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Main_95SceneCode.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Main_95SceneCode.mapOfGDgdjs_9546Main_959595SceneCode_9546GDPlayerObjects2Objects, gdjs.Main_95SceneCode.mapOfGDgdjs_9546Main_959595SceneCode_9546GDCollission4Objects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("bg3"), gdjs.Main_95SceneCode.GDbg3Objects2);
{gdjs.evtTools.camera.showLayer(runtimeScene, "bg3");
}
{for(var i = 0, len = gdjs.Main_95SceneCode.GDbg3Objects2.length ;i < len;++i) {
    gdjs.Main_95SceneCode.GDbg3Objects2[i].getBehavior("Tween").addObjectOpacityTween2("none", 255, "linear", 1, false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Collission4"), gdjs.Main_95SceneCode.GDCollission4Objects2);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Main_95SceneCode.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Main_95SceneCode.mapOfGDgdjs_9546Main_959595SceneCode_9546GDPlayerObjects2Objects, gdjs.Main_95SceneCode.mapOfGDgdjs_9546Main_959595SceneCode_9546GDCollission4Objects2Objects, true, runtimeScene, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("bg3"), gdjs.Main_95SceneCode.GDbg3Objects2);
{for(var i = 0, len = gdjs.Main_95SceneCode.GDbg3Objects2.length ;i < len;++i) {
    gdjs.Main_95SceneCode.GDbg3Objects2[i].getBehavior("Tween").addObjectOpacityTween2("none", 0, "linear", 1, false);
}
}

{ //Subevents
gdjs.Main_95SceneCode.eventsList5(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Collission5"), gdjs.Main_95SceneCode.GDCollission5Objects2);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Main_95SceneCode.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Main_95SceneCode.mapOfGDgdjs_9546Main_959595SceneCode_9546GDPlayerObjects2Objects, gdjs.Main_95SceneCode.mapOfGDgdjs_9546Main_959595SceneCode_9546GDCollission5Objects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("bg4"), gdjs.Main_95SceneCode.GDbg4Objects2);
{gdjs.evtTools.camera.showLayer(runtimeScene, "bg4");
}
{for(var i = 0, len = gdjs.Main_95SceneCode.GDbg4Objects2.length ;i < len;++i) {
    gdjs.Main_95SceneCode.GDbg4Objects2[i].getBehavior("Tween").addObjectOpacityTween2("none", 255, "linear", 1, false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Collission5"), gdjs.Main_95SceneCode.GDCollission5Objects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Main_95SceneCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Main_95SceneCode.mapOfGDgdjs_9546Main_959595SceneCode_9546GDPlayerObjects1Objects, gdjs.Main_95SceneCode.mapOfGDgdjs_9546Main_959595SceneCode_9546GDCollission5Objects1Objects, true, runtimeScene, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("bg4"), gdjs.Main_95SceneCode.GDbg4Objects1);
{for(var i = 0, len = gdjs.Main_95SceneCode.GDbg4Objects1.length ;i < len;++i) {
    gdjs.Main_95SceneCode.GDbg4Objects1[i].getBehavior("Tween").addObjectOpacityTween2("none", 0, "linear", 1, false);
}
}

{ //Subevents
gdjs.Main_95SceneCode.eventsList6(runtimeScene);} //End of subevents
}

}


};gdjs.Main_95SceneCode.userFunc0xc467130 = function GDJSInlineCode(runtimeScene) {
"use strict";
window.location.href = "../index.html";
};
gdjs.Main_95SceneCode.eventsList8 = function(runtimeScene) {

{


gdjs.Main_95SceneCode.userFunc0xc467130(runtimeScene);

}


};gdjs.Main_95SceneCode.eventsList9 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Web_BG"), gdjs.Main_95SceneCode.GDWeb_9595BGObjects1);
gdjs.copyArray(runtimeScene.getObjects("bg2"), gdjs.Main_95SceneCode.GDbg2Objects1);
gdjs.copyArray(runtimeScene.getObjects("bg3"), gdjs.Main_95SceneCode.GDbg3Objects1);
gdjs.copyArray(runtimeScene.getObjects("bg4"), gdjs.Main_95SceneCode.GDbg4Objects1);
{for(var i = 0, len = gdjs.Main_95SceneCode.GDWeb_9595BGObjects1.length ;i < len;++i) {
    gdjs.Main_95SceneCode.GDWeb_9595BGObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs.Main_95SceneCode.GDbg2Objects1.length ;i < len;++i) {
    gdjs.Main_95SceneCode.GDbg2Objects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs.Main_95SceneCode.GDbg3Objects1.length ;i < len;++i) {
    gdjs.Main_95SceneCode.GDbg3Objects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs.Main_95SceneCode.GDbg4Objects1.length ;i < len;++i) {
    gdjs.Main_95SceneCode.GDbg4Objects1[i].getBehavior("Opacity").setOpacity(0);
}
}
}

}


{


gdjs.Main_95SceneCode.eventsList0(runtimeScene);
}


{


gdjs.Main_95SceneCode.eventsList1(runtimeScene);
}


{


gdjs.Main_95SceneCode.eventsList7(runtimeScene);
}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Escape");
if (isConditionTrue_0) {

{ //Subevents
gdjs.Main_95SceneCode.eventsList8(runtimeScene);} //End of subevents
}

}


};

gdjs.Main_95SceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Main_95SceneCode.GDPlayerObjects1.length = 0;
gdjs.Main_95SceneCode.GDPlayerObjects2.length = 0;
gdjs.Main_95SceneCode.GDPlayerObjects3.length = 0;
gdjs.Main_95SceneCode.GDTABLE_9595CHAIRSObjects1.length = 0;
gdjs.Main_95SceneCode.GDTABLE_9595CHAIRSObjects2.length = 0;
gdjs.Main_95SceneCode.GDTABLE_9595CHAIRSObjects3.length = 0;
gdjs.Main_95SceneCode.GDWALLSObjects1.length = 0;
gdjs.Main_95SceneCode.GDWALLSObjects2.length = 0;
gdjs.Main_95SceneCode.GDWALLSObjects3.length = 0;
gdjs.Main_95SceneCode.GDCollissionObjects1.length = 0;
gdjs.Main_95SceneCode.GDCollissionObjects2.length = 0;
gdjs.Main_95SceneCode.GDCollissionObjects3.length = 0;
gdjs.Main_95SceneCode.GDCollission2Objects1.length = 0;
gdjs.Main_95SceneCode.GDCollission2Objects2.length = 0;
gdjs.Main_95SceneCode.GDCollission2Objects3.length = 0;
gdjs.Main_95SceneCode.GDNewTextObjects1.length = 0;
gdjs.Main_95SceneCode.GDNewTextObjects2.length = 0;
gdjs.Main_95SceneCode.GDNewTextObjects3.length = 0;
gdjs.Main_95SceneCode.GDComputersObjects1.length = 0;
gdjs.Main_95SceneCode.GDComputersObjects2.length = 0;
gdjs.Main_95SceneCode.GDComputersObjects3.length = 0;
gdjs.Main_95SceneCode.GDFLOORSObjects1.length = 0;
gdjs.Main_95SceneCode.GDFLOORSObjects2.length = 0;
gdjs.Main_95SceneCode.GDFLOORSObjects3.length = 0;
gdjs.Main_95SceneCode.GDGeneralObjects1.length = 0;
gdjs.Main_95SceneCode.GDGeneralObjects2.length = 0;
gdjs.Main_95SceneCode.GDGeneralObjects3.length = 0;
gdjs.Main_95SceneCode.GDWeb_9595BGObjects1.length = 0;
gdjs.Main_95SceneCode.GDWeb_9595BGObjects2.length = 0;
gdjs.Main_95SceneCode.GDWeb_9595BGObjects3.length = 0;
gdjs.Main_95SceneCode.GDtopObjects1.length = 0;
gdjs.Main_95SceneCode.GDtopObjects2.length = 0;
gdjs.Main_95SceneCode.GDtopObjects3.length = 0;
gdjs.Main_95SceneCode.GDCollission3Objects1.length = 0;
gdjs.Main_95SceneCode.GDCollission3Objects2.length = 0;
gdjs.Main_95SceneCode.GDCollission3Objects3.length = 0;
gdjs.Main_95SceneCode.GDCollission4Objects1.length = 0;
gdjs.Main_95SceneCode.GDCollission4Objects2.length = 0;
gdjs.Main_95SceneCode.GDCollission4Objects3.length = 0;
gdjs.Main_95SceneCode.GDCollission5Objects1.length = 0;
gdjs.Main_95SceneCode.GDCollission5Objects2.length = 0;
gdjs.Main_95SceneCode.GDCollission5Objects3.length = 0;
gdjs.Main_95SceneCode.GDbg2Objects1.length = 0;
gdjs.Main_95SceneCode.GDbg2Objects2.length = 0;
gdjs.Main_95SceneCode.GDbg2Objects3.length = 0;
gdjs.Main_95SceneCode.GDbg3Objects1.length = 0;
gdjs.Main_95SceneCode.GDbg3Objects2.length = 0;
gdjs.Main_95SceneCode.GDbg3Objects3.length = 0;
gdjs.Main_95SceneCode.GDbg4Objects1.length = 0;
gdjs.Main_95SceneCode.GDbg4Objects2.length = 0;
gdjs.Main_95SceneCode.GDbg4Objects3.length = 0;
gdjs.Main_95SceneCode.GDcollissionwallObjects1.length = 0;
gdjs.Main_95SceneCode.GDcollissionwallObjects2.length = 0;
gdjs.Main_95SceneCode.GDcollissionwallObjects3.length = 0;

gdjs.Main_95SceneCode.eventsList9(runtimeScene);
gdjs.Main_95SceneCode.GDPlayerObjects1.length = 0;
gdjs.Main_95SceneCode.GDPlayerObjects2.length = 0;
gdjs.Main_95SceneCode.GDPlayerObjects3.length = 0;
gdjs.Main_95SceneCode.GDTABLE_9595CHAIRSObjects1.length = 0;
gdjs.Main_95SceneCode.GDTABLE_9595CHAIRSObjects2.length = 0;
gdjs.Main_95SceneCode.GDTABLE_9595CHAIRSObjects3.length = 0;
gdjs.Main_95SceneCode.GDWALLSObjects1.length = 0;
gdjs.Main_95SceneCode.GDWALLSObjects2.length = 0;
gdjs.Main_95SceneCode.GDWALLSObjects3.length = 0;
gdjs.Main_95SceneCode.GDCollissionObjects1.length = 0;
gdjs.Main_95SceneCode.GDCollissionObjects2.length = 0;
gdjs.Main_95SceneCode.GDCollissionObjects3.length = 0;
gdjs.Main_95SceneCode.GDCollission2Objects1.length = 0;
gdjs.Main_95SceneCode.GDCollission2Objects2.length = 0;
gdjs.Main_95SceneCode.GDCollission2Objects3.length = 0;
gdjs.Main_95SceneCode.GDNewTextObjects1.length = 0;
gdjs.Main_95SceneCode.GDNewTextObjects2.length = 0;
gdjs.Main_95SceneCode.GDNewTextObjects3.length = 0;
gdjs.Main_95SceneCode.GDComputersObjects1.length = 0;
gdjs.Main_95SceneCode.GDComputersObjects2.length = 0;
gdjs.Main_95SceneCode.GDComputersObjects3.length = 0;
gdjs.Main_95SceneCode.GDFLOORSObjects1.length = 0;
gdjs.Main_95SceneCode.GDFLOORSObjects2.length = 0;
gdjs.Main_95SceneCode.GDFLOORSObjects3.length = 0;
gdjs.Main_95SceneCode.GDGeneralObjects1.length = 0;
gdjs.Main_95SceneCode.GDGeneralObjects2.length = 0;
gdjs.Main_95SceneCode.GDGeneralObjects3.length = 0;
gdjs.Main_95SceneCode.GDWeb_9595BGObjects1.length = 0;
gdjs.Main_95SceneCode.GDWeb_9595BGObjects2.length = 0;
gdjs.Main_95SceneCode.GDWeb_9595BGObjects3.length = 0;
gdjs.Main_95SceneCode.GDtopObjects1.length = 0;
gdjs.Main_95SceneCode.GDtopObjects2.length = 0;
gdjs.Main_95SceneCode.GDtopObjects3.length = 0;
gdjs.Main_95SceneCode.GDCollission3Objects1.length = 0;
gdjs.Main_95SceneCode.GDCollission3Objects2.length = 0;
gdjs.Main_95SceneCode.GDCollission3Objects3.length = 0;
gdjs.Main_95SceneCode.GDCollission4Objects1.length = 0;
gdjs.Main_95SceneCode.GDCollission4Objects2.length = 0;
gdjs.Main_95SceneCode.GDCollission4Objects3.length = 0;
gdjs.Main_95SceneCode.GDCollission5Objects1.length = 0;
gdjs.Main_95SceneCode.GDCollission5Objects2.length = 0;
gdjs.Main_95SceneCode.GDCollission5Objects3.length = 0;
gdjs.Main_95SceneCode.GDbg2Objects1.length = 0;
gdjs.Main_95SceneCode.GDbg2Objects2.length = 0;
gdjs.Main_95SceneCode.GDbg2Objects3.length = 0;
gdjs.Main_95SceneCode.GDbg3Objects1.length = 0;
gdjs.Main_95SceneCode.GDbg3Objects2.length = 0;
gdjs.Main_95SceneCode.GDbg3Objects3.length = 0;
gdjs.Main_95SceneCode.GDbg4Objects1.length = 0;
gdjs.Main_95SceneCode.GDbg4Objects2.length = 0;
gdjs.Main_95SceneCode.GDbg4Objects3.length = 0;
gdjs.Main_95SceneCode.GDcollissionwallObjects1.length = 0;
gdjs.Main_95SceneCode.GDcollissionwallObjects2.length = 0;
gdjs.Main_95SceneCode.GDcollissionwallObjects3.length = 0;


return;

}

gdjs['Main_95SceneCode'] = gdjs.Main_95SceneCode;
