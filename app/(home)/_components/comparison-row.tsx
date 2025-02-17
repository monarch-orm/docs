import { Check, X } from "lucide-react";

function ComparisonRow({ feature, monarch, mongoose, prisma, drizzle }: {
    feature: string, monarch?: boolean, mongoose?: boolean, prisma?: boolean, drizzle?: boolean
}) {
    return (
        <tr>
            <td className="p-4 bg-[#101320] md:bg-secondary/30">{feature}</td>
            <td className="p-4 text-center">{monarch ? <Check className="inline-block text-green-500" /> : <X className="inline-block text-red-500" />}</td>
            <td className="p-4 text-center">{mongoose ? <Check className="inline-block text-green-500" /> : <X className="inline-block text-red-500" />}</td>
            <td className="p-4 text-center">{prisma ? <Check className="inline-block text-green-500" /> : <X className="inline-block text-red-500" />}</td>
            <td className="p-4 text-center">{drizzle ? <Check className="inline-block text-green-500" /> : <X className="inline-block text-red-500" />}</td>
        </tr>
    );
}

export default ComparisonRow