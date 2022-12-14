#
# This is the user-interface definition of a Shiny web application. You can
# run the application by clicking 'Run App' above.
#
# Find out more about building applications with Shiny here:
#
#    http://shiny.rstudio.com/
#

library(shiny)
library(shinydashboard)

ui <- dashboardPage(
  dashboardHeader(title = "Mastering Shiny"),
  ## Sidebar content
  dashboardSidebar(
    sidebarMenu(
      menuItem("Default app", tabName = "default"),
      menuItem("My first shiny app", tabName = "my_first"),
      menuItem("Summarize data sets", tabName = "data_summary")
    )
  ),
  ## Body content
  dashboardBody(
    tabItems(
      # Default app:
      tabItem(tabName = "default",
              fluidPage(
                
                # Application title
                titlePanel("Old Faithful Geyser Data"),
                
                # Sidebar with a slider input for number of bins
                sidebarLayout(
                  sidebarPanel(
                    sliderInput("bins",
                                "Number of bins:",
                                min = 1,
                                max = 50,
                                value = 30)
                  ),
                  
                  # Show a plot of the generated distribution
                  mainPanel(
                    plotOutput("distPlot")
                  )
                )
              )),
      # First tab content
      tabItem(tabName = "my_first",
              fluidPage(
                "Hello, world!"
              )
      ),
      
      # Datasets
      tabItem(tabName = "data_summary",
              fluidPage(
                selectInput("dataset", label = "Dataset", choices = ls("package:datasets")),
                verbatimTextOutput("summary"),
                tableOutput("table")
              )
      )
    )
  )
)

server <- function(input, output) {
  output$distPlot <- renderPlot({
    
    # generate bins based on input$bins from ui.R
    x    <- faithful[, 2]
    bins <- seq(min(x), max(x), length.out = input$bins + 1)
    
    # draw the histogram with the specified number of bins
    hist(x, breaks = bins, col = 'darkgray', border = 'white')
    
  })
  output$summary <- renderPrint({
    dataset <- get(input$dataset, "package:datasets")
    summary(dataset)
  })
  
  output$table <- renderTable({
    dataset <- get(input$dataset, "package:datasets")
    dataset
  })
}
shinyApp(ui, server)