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

        var $innerUl2;
        var $innerLi2;
        var $innerData2;

        if (innerItem.children) {
          innerData2 = innerItem.children;
          $innerUl2 = $("<ul />");

          _.each(innerData2, function(innerItem2) {
            $innerLi2 = $("<li />");
            $innerLi2.append("<span>" + innerItem2.name + "</span>");
            $innerUl2.append($innerLi2);

            var $innerUl3;
            var $innerLi3;
            var $innerData3;

            if(innerItem2.children) {
              innerData3 = innerItem2.children;
              $innerUl3 = $("<ul />");

              _.each(innerData3, function(innerItem3) {
                $innerLi3 = $("<li />");
                $innerLi3.append("<span>" + innerItem3.name + "</span>");
                $innerUl3.append($innerLi3);

                var $innerUl4;
                var $innerLi4;
                var $innerData4;

                if (innerItem3.children) {
                  innerData4 = innerItem3.children;
                  $innerUl4 = $("<ul />");

                  _.each(innerData4, function(innerItem4) {
                    $innerLi4 = $("<li />");
                    $innerLi4.append("<span>" + innerItem4.name + "</span>");
                    $innerUl4.append($innerLi4);

                    var $innerUl5;
                    var $innerLi5;
                    var $innerData5;

                    if (innerItem4.children) {
                      innerData5 = innerItem4.children;
                      $innerUl5 = $("<ul />");

                      _.each(innerData5, function(innerItem5) {
                        $innerLi5 = $("<li />");
                        $innerLi5.append("<span>" + innerItem5.name + "</span>");
                        $innerUl5.append($innerLi5);
                      });

                      $innerLi4.append($innerUl5);

                    }

                    $innerUl4.append($innerLi4);

                  });

                  $innerLi3.append($innerUl4);

                }

                $innerUl3.append($innerLi3);

              });

              $innerLi2.append($innerUl3);

            }

            $innerUl2.append($innerLi2);

          });

          $innerLi.append($innerUl2);

        }

        $innerUl.append($innerLi);

      });

      $rootLi.append($innerUl);

    }
    
    $rootUl.append($rootLi);

  });

  return $rootUl;

};