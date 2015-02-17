$(function() {

    $.ajax("data.json", {
      success: function(data) {
        console.log("data", data);
        var tree = buildTree(data);
        $("body").html(tree);
      }
    });


});

var buildTree = function(data) {
  var $rootUl;
  var $rootLi;

  $rootUl = $("<ul></ul>");  // "<ul />" shortcut for empty element

  _.each(data, function(item) {

    var $innerUl;
    var $innerLi;
    var $innerData;

    $rootLi = $("<li />");
    $rootLi.append("<span>" + item.name + "</span>");

    if (item.children) {

      innerData = item.children;
      $innerUl = $("<ul />");

      _.each(innerData, function(innerItem) {
        $innerLi = $("<li />");
        $innerLi.append("<span>" + innerItem.name + "</span>");
        $innerUl.append($innerLi);
      });

      $rootLi.append($innerUl);

    }
    
    $rootUl.append($rootLi);

  });

  return $rootUl;

};