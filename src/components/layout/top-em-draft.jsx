<Card className="relative aspect-square">
    <div className="absolute">
        <img src={CardBackgroundSVG} alt="Footer image" />
    </div>

    <CardContent className="">
        <div className="rounded-lg border">
            {/* <div className="inline-block aspect-square rounded-lg border"> */}
            <img
                src={MCreditLogo}
                alt="MCredit Logo"
                // className="aspect-square object-contain duration-300 ease-in-out group-hover:scale-110"
                className="aspect-square object-contain"
            />
        </div>

        <h1 className="text-xl font-bold text-foreground">MCredit</h1>
    </CardContent>

    <CardFooter className="absolute bottom-0 w-full bg-muted py-5">
        <h1 className="text-sm">Hanoi</h1>
    </CardFooter>
</Card>;
