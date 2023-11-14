import { NextResponse } from "next/server";

import primsa from "@/app/libs/primsadb";
import getCurrentUser from "@/app/actions/getCurrentUser";


interface IParams {
    listingId?: string;
}

export async function DELETE(
    request: Request,
    { params }: { params: IParams }
) {
    const currentUser = await getCurrentUser();

    if (!currentUser) {
        return NextResponse.error();
    }

    const { listingId } = params;

    if (!listingId || typeof listingId !== "string") {
        throw new Error("Invalid ID!");
    }

    const listing = await primsa.listing.deleteMany({
        where: {
            id: listingId,
            userId: currentUser.id,
        }
    });

    return NextResponse.json(listing);
}