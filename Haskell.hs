printHelloWorld :: Int -> IO ()
printHelloWorld 0 = return ()
printHelloWorld n = do
    putStrLn "Hello World"
    printHelloWorld (n - 1)

main :: IO ()
main = printHelloWorld 5
