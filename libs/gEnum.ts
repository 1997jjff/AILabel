export enum ECanvasTextBaseLine {
    Bottom = 'bottom',
    Top = 'top',
    Middle = 'middle'
};

// Map:Mode类型
export enum EMapMode {
    Pan = "PAN", // 浏览
    MARKER = "MARKER", // 绘制注记
    Point = "POINT", // 绘制点
    Circle = "CIRCLE", // 绘制圆
    Line = "LINE", // 绘制线段
    Polyline = "POLYLINE", // 绘制多段线
    Rect = "RECT", // 绘制矩形
    Polygon = "POLYGON", // 绘制多边形
    DrawMask = "DRAWMASK", // 绘制涂抹
    ClearMask = "CLEARMASK", // 清除涂抹
    ImageMask = "IMAGEMASK" // 图片涂抹
};

// map.events.on事件
export enum EEventType {
    BoundsChanged = "boundsChanged", // 视野范围发生变化触发
    FeatureSelected = "featureSelected", // feature选中触发
    FeatureUnselected = "featureUnselected", // feature取消选中触发
    DrawDone = "drawDone", // feature绘制完成
    FeatureUpdated = "featureUpdated", // feature更新完成
    FeatureDeleted = "featureDeleted" // feature删除完成【目前只针对点的右键删除回调】
};

// 手势类型
export enum ECursorType {
    Grab = "-webkit-grab",
    Grabbing = "-webkit-grabbing",
    Crosshair = "crosshair",
    Pointer = "pointer",
    Move = "move",
    NESW_Resize = "nesw-resize",
    NWSE_Resize = "nwse-resize"
};
export enum EUrlCursorType{

};