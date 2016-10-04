##Head First d3.js

###Basic Elements of a d3 chart

+ svg
    - panel's width and height, chart's width and height
    - adjustable margin
+ chart
    - pie (`var pie = d3.layout.pie()`)
    - bar chart (`this.selectAll(".bar")
        .data(params.data)
        .enter()
            .append("rect")`)
    - line chart (`var line = d3.svg.line()`)
    - scatter plot (`g.selectAll(".response")
            .data(arr)
            .enter()
                .append("circle")`)
+ scaling (x scaling, y scaling, linear color scaling, ordinary color scaling, value scaling)
+ axis (xAxis, yAxis)
    - `.scale(x)`
    - `.orient("bottom")`
+ gridlines (xGridlines, yGridlines)
    - `.scale(x)`
    - ticks, tickFormat
    - orient
+ label
    - different kinds of lables: bar label, axis label
    - be careful about label's location