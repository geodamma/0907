var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format__1 = new ol.format.GeoJSON();
var features__1 = format__1.readFeatures(json__1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__1.addFeatures(features__1);
var lyr__1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__1, 
                style: style__1,
                interactive: true,
    title: '建築物<br />\
    <img src="styles/legend/_1_0.png" /> 中<br />\
    <img src="styles/legend/_1_1.png" /> 廢<br />\
    <img src="styles/legend/_1_2.png" /> B<br />\
    <img src="styles/legend/_1_3.png" /> M<br />\
    <img src="styles/legend/_1_4.png" /> R<br />\
    <img src="styles/legend/_1_5.png" /> T<br />\
    <img src="styles/legend/_1_6.png" /> <br />'
        });

lyr_GoogleSatellite_0.setVisible(true);lyr__1.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr__1];
lyr__1.set('fieldAliases', {'樓高': '樓高', '類型': '類型', });
lyr__1.set('fieldImages', {'樓高': 'TextEdit', '類型': 'TextEdit', });
lyr__1.set('fieldLabels', {'樓高': 'header label', '類型': 'header label', });
lyr__1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});