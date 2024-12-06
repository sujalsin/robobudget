package main

import (
	"log"
	"net/http"
	"os"
	"os/signal"
	"syscall"
)

func main() {
	log.Println("Starting RoboBudget Backend Service...")

	// TODO: Initialize configuration
	// TODO: Setup database connections
	// TODO: Initialize services
	// TODO: Setup HTTP router

	// Start HTTP server
	server := &http.Server{
		Addr: ":8080",
		// Handler will be set up later
	}

	// Handle graceful shutdown
	go func() {
		sigChan := make(chan os.Signal, 1)
		signal.Notify(sigChan, syscall.SIGINT, syscall.SIGTERM)
		<-sigChan
		log.Println("Shutting down server...")
		if err := server.Close(); err != nil {
			log.Printf("Error during server shutdown: %v\n", err)
		}
	}()

	log.Printf("Server listening on %s\n", server.Addr)
	if err := server.ListenAndServe(); err != http.ErrServerClosed {
		log.Fatalf("HTTP server error: %v\n", err)
	}
}
